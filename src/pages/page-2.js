import React from "react"
import { Link } from "gatsby"

import { Row, Col, Card, CardBody } from 'reactstrap';
import Loadable from 'react-loadable';

import Layout from "../components/layout"
import SEO from "../components/seo"

const LoadableCallendar = Loadable({
  loader: () => import('../components/calendar'),
  loading() {
    return <div>Loading...</div>
  },
})


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Row className="page-title align-items-center">
      <Col sm={4} xl={6}>
        <h4 className="mb-1 mt-0">Calendario</h4>
      </Col>
    </Row>
    <Row>
      <Col className="col-12">
        <Card>
          <CardBody>
            {/* fullcalendar control */}
            <LoadableCallendar />
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage