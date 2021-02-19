import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ProductCard from "./Products/ProductCard"

import styles from "./products.module.scss"

const ProductsExcerpt = () => {
  return (
    <section className={`container ${styles.section}`}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  )
}

export default ProductsExcerpt
