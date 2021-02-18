import React from "react"
import { useShoppingCart } from "use-shopping-cart"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Products from "../components/Products/Products"

const AdvancedExamplePage = () => {
  /* Gets the totalPrice and a method for redirecting to stripe */
  const { totalPrice, redirectToCheckout, cartCount } = useShoppingCart()

  console.log(cartCount)

  return (
    <Layout>
      <SEO title="Advanced Example" />
      <h1 className="container">This is the advanced example</h1>
      {/*  <Products /> */}
    </Layout>
  )
}

export default AdvancedExamplePage
