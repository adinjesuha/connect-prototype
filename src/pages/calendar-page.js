import React from "react"

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


const CalendarPage = () => (
  <Layout>
    <SEO title="Calendario" />
    <Row className="page-title align-items-center">
      <Col xl={12}>
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
  </Layout>
)

export default CalendarPage