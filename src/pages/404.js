import React from "react"
import { Link } from 'gatsby'
import { Container, Row, Col } from 'reactstrap';

import imgNotFound from '../images/not-found.png';
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="account-pages my-5">
      <Container>
        <Row className="justify-content-center">
          <Col xl={4} lg={5}>
            <div className="text-center">
              <div>
                <img src={imgNotFound} alt="" className="img-fluid" />
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <h3 className="mt-3">No podemos encontrar lo que buscas</h3>
            <p className="text-muted mb-5">Es posible que haya escrito mal la dirección o que la página se haya movido.</p>
            <Link to="/" className="btn btn-lg btn-primary mt-4">Volver al inicio</Link>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default NotFoundPage

