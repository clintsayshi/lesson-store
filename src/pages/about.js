import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Checkout from "../components/checkout"

import styles from "./../components/about.module.scss"
import svgLogo from "./../images/LessON.svg"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />

      <div className={`container ${styles.pageHeading}`}>
        <h3 className={styles.pageHeadingText}>About</h3>
        <img className={styles.aboutLogo} src={svgLogo} alt="brand logo" />
      </div>

      <section className={`container ${styles.aboutParagraph}`}>
        <p>
          Avel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc
          sed augue lacus viverra vitae congue eu consequat ac felis donec et
          odio pellentesque diam volutpat commodo sed egestas egestas fringilla
          phasellus faucibus.
          <br />
          <br />
          Scelerisque eleifend donec pretium vulputate sapien nec sagittis
          aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc
          sed velit dignissim sodales ut eu sem integer vitae justo eget magna
          fermentum iaculis eu non diam phasellus vestibulum lorem sed risus
          ultricies
        </p>
      </section>

      <div className={`container ${styles.pageHeading}`}>
        <h3 className={styles.pageHeadingText}>FAQs</h3>
      </div>

      <section className={`container ${styles.aboutParagraph}`}>
        <p>
          Avel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc
          sed augue lacus viverra vitae congue eu consequat ac felis donec et
          odio pellentesque diam volutpat commodo sed egestas egestas fringilla
          phasellus faucibus.
          <br />
          <br />
          Scelerisque eleifend donec pretium vulputate sapien nec sagittis
          aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc
          sed velit dignissim sodales ut eu sem integer vitae justo eget magna
          fermentum iaculis eu non diam phasellus vestibulum lorem sed risus
          ultricies
        </p>
      </section>
    </Layout>
  )
}

export default AboutPage
