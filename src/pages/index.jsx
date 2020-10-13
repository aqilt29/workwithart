import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

const IndexPage = (...props) => (
  <Layout>
    <SEO title="Home" />
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </Layout>
)

export default IndexPage
