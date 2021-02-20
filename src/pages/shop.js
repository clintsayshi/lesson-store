import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductCard from "./../components/Products/ProductCard"

import styles from "./../components/products.module.scss"

const ShopPage = () => {
  return (
    <Layout>
      <SEO title="Shop" />
      <section className={`container ${styles.viewProducts}`}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </Layout>
  )
}

export default ShopPage
