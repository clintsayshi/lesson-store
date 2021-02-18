import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Checkout from "../components/checkout"

import svgLogo from "./../images/LessON.svg"
import Hero from "../components/hero"
import ProductsExcerpt from "../components/products-excerpt"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />

    <ProductsExcerpt />
  </Layout>
)

export default IndexPage
