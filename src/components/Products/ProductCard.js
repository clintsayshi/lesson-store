import React, { useState } from "react"
import getStripe from "../../utils/stripejs"

import tie from "./../../images/tie.jpg"

const productStyle = {
  width: "330px",

  //marginRight: "1rem",
  textAlign: "center",
}

const productImage = {
  width: "100%",
  height: "350px",
  objectFit: "cover",
  objectPosition: "center",
}

const productName = {
  fontSize: "15px",
}

const productPrice = {
  fontSize: "14px",
  fontWeight: "bold",
}

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
    <div style={productStyle}>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ border: "none" }}>
          <img style={productImage} src={tie} />

          <p style={productName}>Gray and Black Striped Crew-neck Top</p>

          <label style={productPrice}>R320</label>
        </fieldset>
      </form>
    </div>
  )
}

export default ProductCard
