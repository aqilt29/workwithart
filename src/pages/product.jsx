import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const ProductsPage = ({ data }) => (
  <Layout>
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
    {/* <h1>Products</h1>
    <ul>
      {data.allShopifyProduct.edges.map(({ node }) => (
        <li key={node.shopifyId}>
          <h3>
            <Link to={`/product/${node.handle}`}>{node.title}</Link>
            {" - "}${node.priceRange.minVariantPrice.amount}
          </h3>
          <p>{node.description}</p>
        </li>
      ))}
    </ul> */}
    <div>

    </div>
  </Layout>
)

export default ProductsPage

export const query = graphql`
{
  allShopifyProduct(limit: 10) {
    nodes {
      id
      title
      productType
      description
      variants {
        id
        image {
          localFile {
            childImageSharp {
              id
              fluid {
                srcSet
              }
            }
          }
        }
        priceV2 {
          amount
          currencyCode
        }
        sku
      }
    }
  }
}
`