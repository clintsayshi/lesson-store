import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ProductCard from "./Products/ProductCard"

const ProductsExcerpt = () => {
  const section = {
    margin: "2rem auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    //border: "1px dotted blue",
  }

  return (
    <section style={section} className="container">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  )
}

export default ProductsExcerpt
