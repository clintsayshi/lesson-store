import React, { useState } from "react"
import getStripe from "../../utils/stripejs"

import styles from "./../products.module.scss"
import tie from "./../../images/tie.jpg"

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)

    const price = new FormData(event.target).get("priceSelect")
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price, quantity: 1 }],
      successUrl: `${window.location.origin}/page-2/`,
      cancelUrl: `${window.location.origin}/advanced`,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  return (
    <div className={styles.product}>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ border: "none" }}>
          <img className={styles.productImage} src={tie} />

          <p className={styles.productName}>
            Gray and Black Striped Crew-neck Top
          </p>

          <label className={styles.productPrice}>R320.00</label>
        </fieldset>
      </form>
    </div>
  )
}

export default ProductCard
