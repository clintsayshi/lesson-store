import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Checkout from "../components/checkout"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>About</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        tempore, porro fugiat vel nesciunt voluptate sit id tenetur eos, tempora
        dolor maxime hic soluta eligendi ipsum commodi voluptas laborum
        consequuntur.
      </p>
    </Layout>
  )
}

export default AboutPage
