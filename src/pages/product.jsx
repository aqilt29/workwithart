import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

const ProductsPage = ({ data }) => (
  <div>
    <h1>Products</h1>
    <ul>
      {data.allShopifyProduct.edges.map(({ node }) => (
        <li key={node.shopifyId}>
          <h3>
            <Link to={`/product/${node.handle}`}>{node.title}</Link>
            {" - "}${node.priceRange.minVariantPrice.amount}
          </h3>
          <p>{node.description}</p>
          <Img fluid={node.images[0].localFile.childImageSharp.fluid} />
        </li>
      ))}
    </ul>
  </div>
)

export default ProductsPage

export const query = graphql`
  {
  allShopifyProduct(sort: {fields: [title]}) {
    edges {
      node {
        title
        images {
          localFile {
            childImageSharp {
              fluid(maxWidth: 300) {
               ...GatsbyImageSharpFluid 
              }
            }
          }
        }
        shopifyId
        description
        handle
        priceRange {
          minVariantPrice {
            amount
          }
        }
      }
    }
  }
}
`