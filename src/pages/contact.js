import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Checkout from "../components/checkout"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <div className={`container pageHeading`}>
        <h3 className="pageHeadingText">Get in Touch</h3>
      </div>

      <div className="divider"></div>
      <p className="container">
        To get in touch, send us an email at hello@ferme.shop or send us an
        email with the form below. If your email is to inquire about an already
        placed order, please include your Order Number found in your
        confirmation email.
        <br />
        You can also follow us on{" "}
        <a href="https:/instagram.com/mcclintsayshi">Instagram</a>
      </p>
    </Layout>
  )
}

export default ContactPage
