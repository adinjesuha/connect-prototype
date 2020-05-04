import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

const ProjectStats = ({client, reportNumber}) => (
  <Row>
    <Col>
      <Card>
        <CardBody className="p-0">
        
          <h6 className="card-title border-bottom p-3 mb-0 header-title">{`Empresa: ${client}`}</h6>

          <Row className="py-1">
            <Col xl={3} sm={6}>
              <div className="p-3">
                <p className="mb-2">Análisis No.</p>
                <h5 className="font-size-16">{reportNumber}</h5>
              </div>
            </Col>
            <Col xl={3} sm={6}>
              <div className="p-3">
                <p className="mb-2">Fecha de Monitoreo</p>
                <h5 className="font-size-16">15 de julio, 2020</h5>
              </div>
            </Col>
            <Col xl={3} sm={6}>
              <div className="p-3">
                <p className="mb-2">Fecha del Informe</p>
                <h5 className="font-size-16">17 de julio, 2020</h5>
              </div>
            </Col>
            <Col xl={3} sm={6}>
              <div className="p-3">
                <p className="mb-2">Muestras</p>
                <h5 className="font-size-16">2</h5>
              </div>
            </Col>
          </Row>

        </CardBody>
      </Card>
    </Col>
  </Row>
);

export default ProjectStats;
