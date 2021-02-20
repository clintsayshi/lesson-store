import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import ProductCard from "./Products/ProductCard"

import styles from "./products.module.scss"

const ProductsExcerpt = () => {
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.viewProducts}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <Link className={styles.link} to="/shop">
        Browse All Items
      </Link>
    </section>
  )
}

export default ProductsExcerpt
