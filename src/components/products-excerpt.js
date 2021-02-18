import React from "react"

const ProductsExcerpt = () => {
  const hero = {
    border: "1px dotted blue",
    textAlign: "center",
  }

  const heroCover = {
    height: "50vh",
    border: "1px dotted blue",
    marginBottom: "1.5rem",
  }

  const brandLogo = {
    height: "4vh",
  }

  const someHeroHeading = {
    textTransform: "uppercase",
    marginTop: "0.5rem",
  }

  const someHeroParagraph = {
    margin: "1rem 0",
  }

  return (
    <StaticQuery
      query={graphql`
        query ProductPrices {
          prices: allStripePrice(
            filter: { active: { eq: true } }
            sort: { fields: [unit_amount] }
          ) {
            edges {
              node {
                id
                active
                currency
                unit_amount
                product {
                  id
                  name
                  images
                }
              }
            }
          }
        }
      `}
      render={({ prices }) => {
        // Group prices by product
        const products = {}
        for (const { node: price } of prices.edges) {
          const product = price.product
          if (!products[product.id]) {
            products[product.id] = product
            products[product.id].prices = []
          }
          products[product.id].prices.push(price)
        }

        return (
          <div style={containerStyles}>
            {Object.keys(products).map(key => (
              <ProductCard key={products[key].id} product={products[key]} />
            ))}
          </div>
        )
      }}
    />
  )
}

export default ProductsExcerpt
