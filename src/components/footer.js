import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./header.module.scss"

const Footer = ({ siteTitle }) => {
  return (
    <footer
      className="container"
      style={{
        marginTop: "2rem",
        marginBottom: "1rem",
      }}
    >
      <p>&copy; {new Date().getFullYear() + " " + siteTitle}</p>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
