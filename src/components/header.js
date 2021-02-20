import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import styles from "./header.module.scss"
import svgLogo from "./../images/LessON.svg"

const Header = ({ siteTitle }) => {
  //Toggle mobile Menu
  const [toggleNavLinks, setToggleNavLinks] = useState(false)
  const [toggleCart, setToggleCart] = useState(false)

  const toggleMenu = () => {
    setToggleNavLinks(prev => !prev)
    if (toggleCart) toggleSideCart()
  }
  const toggleSideCart = () => {
    setToggleCart(prev => !prev)
    if (toggleNavLinks) toggleMenu()
  }

  return (
    <header>
      <nav class={`${styles.menu} container`}>
        <ul className={styles.menuLinks}>
          <li onClick={toggleMenu} className={styles.menuToggle}>
            Menu
          </li>

          <li className={styles.brandLogo}>
            <Link to="/">
              <img src={svgLogo} />
            </Link>
          </li>

          <li>
            <ul
              className={
                toggleNavLinks
                  ? `${styles.middleMenuLinks} ${styles.active}`
                  : `${styles.middleMenuLinks}`
              }
            >
              <li className={styles.menuLink}>
                <Link to="/shop">Shop</Link>
              </li>
              <li className={styles.menuLink}>
                <Link to="/about">About</Link>
              </li>
              <li className={styles.menuLink}>
                <Link to="/contact">Get in Touch</Link>
              </li>
            </ul>
          </li>

          <li>
            <li className={styles.menuCart}>
              <a href="#" onClick={toggleSideCart}>
                Cart(0)
              </a>
            </li>
          </li>
        </ul>
      </nav>

      <div
        className={
          toggleCart ? `${styles.cart} ${styles.active}` : `${styles.cart}`
        }
      >
        <div className={styles.cartHeader}>
          <h2 className={styles.cartHeaderTitle}>Shopping Cart</h2>
          <div className={styles.cartHeaderCloseBtn} onClick={toggleSideCart}>
            CLOSE
          </div>
        </div>
        <div className={styles.cartContent}>
          <div className={styles.cartItem}>
            <div className={styles.itemThumbnail}></div>
            <div className={styles.itemDetails}>
              <h4 className={styles.itemName}>
                Gray and Black Striped Crew-neck Top
              </h4>
              <p className={styles.itemPrice}>R350</p>
              <select name="size" id="size-select">
                <option value="">--Select Size--</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
              <div className={styles.itemRemoveBtn}>Remove</div>
            </div>
          </div>
          <div className={styles.cartItem}>
            <div className={styles.itemThumbnail}></div>
            <div className={styles.itemDetails}>
              <h4 className={styles.itemName}>
                Gray and Black Striped Crew-neck Top
              </h4>
              <p className={styles.itemPrice}>R350</p>
              <select name="size" id="size-select">
                <option value="">--Select Size--</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
              <div className={styles.itemRemoveBtn}>Remove</div>
            </div>
          </div>
        </div>

        <div className={styles.cartActions}></div>
      </div>

      {/* <div
        className={
          toggleCart
            ? `${styles.overlay} ${styles.active}`
            : `${styles.overlay}`
        }
      ></div> */}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
