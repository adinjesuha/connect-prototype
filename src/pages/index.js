import React from "react"
import { Link } from "gatsby"
import { useQuery, gql } from '@apollo/client'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const { data, loading, error } = useQuery(gql`
    {
      companies{
        id
        name
        address
      }
    }
  `)

  if(loading) return <div>Loading...</div>
  if(error) return (
    <React.Fragment>
      <div>Universe broken...</div>
      <p>{err.message}</p>
    </React.Fragment>
  )
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello world!!!</h1>
      <ul>{data.companies.map((company, id) => (
        <li key={id}>{company.name}</li>  
      ))}</ul>
      <Link to="/calendar-page/">Go to Calendar</Link>
      <br />
      <Link to="/charts-page/">Go to Charts</Link>

    </Layout>
  )
}

export default IndexPage
