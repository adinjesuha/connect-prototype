import React from "react"
import { Link } from "gatsby"
import { Button } from 'reactstrap';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>

    <Button color="danger">Danger!</Button>

    <Link to="/page-2/">Go to page 2</Link>

  </Layout>
)

export default IndexPage
