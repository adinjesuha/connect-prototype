import React from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';

import profileImg from '../../images/lacthosa.png';

const CompanyProfile = () =>  (
  <Card className="">
    <CardBody className="profile-user-box">
      <Row>
        <Col>
          <div className="text-center mt-3">
            <img 
              src={profileImg} 
              alt=""
              className="avatar-lg rounded-circle" 
            />
            <h5 className="mt-2 mb-0">Lacthosa Centro</h5>
          </div>
          <div className="mt-4 pt-4 border-top">
            <h4 className="mb-3 font-size-15">Información General</h4>
            <div className="table-responsive">
              <table className="table table-borderless mb-0 text-muted">
                <tbody>
                  <tr>
                    <th scope="row">Contacto</th>
                    <td>Adin Jesuha Castro</td>
                  </tr>
                  <tr>
                    <th scope="row">Email</th>
                    <td>adinjesuha@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Telefono</th>
                    <td>(123) 123 1234</td>
                  </tr>
                  <tr>
                    <th scope="row">Dirección</th>
                    <td>1975 Boring Lane, San Francisco, California, United States - 94108</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-3 pt-4 border-top">
            <h4 className="mb-3 font-size-15">Rubro</h4>
            <label className="badge badge-soft-primary mr-1">Alimentos</label>
            <label className="badge badge-soft-primary mr-1">Lacteos</label>
            <label className="badge badge-soft-primary mr-1">Jugos</label>
          </div>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default CompanyProfile;
