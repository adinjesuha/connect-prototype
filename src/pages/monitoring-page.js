import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MonitoringListing from "../components/monitoringComponents/monitoring-listing";

const MonitoringPage = () => (
  <Layout>
    <SEO title="Monitoreos"/>
    <MonitoringListing />
  </Layout>
)

export default MonitoringPage