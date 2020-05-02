import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from 'reactstrap';

import Topbar from './top-bar'
import LeftSidebar from "./leftside-bar"
import Footer from './footer'
import '../styles/theme.scss'

// loading
const emptyLoading = () => <div></div>;
const loading = () => <div className="text-center"></div>;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      
      <Topbar title={data.site.siteMetadata.title} />
      <LeftSidebar />

      <div className="content-page">
        <div className="content">
          <Container fluid>{children}</Container>
        </div>

        <Footer />

      </div>

    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
