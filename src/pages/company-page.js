import React, { useState } from 'react'
import classNames from 'classnames'
import { Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CompanyProfile from '../components/company/company-profile';
import Activities from '../components/company/activities';
import Analysis from '../components/company/analysis';
import Files from '../components/company/files';

const CompanyPage = () => {
  const [ tabs, setActiveTab ] = useState({
    activeTab: '1'
  })

  const toggleTab = tab => {
    if (tabs.activeTab !== tab) {
      setActiveTab({
        activeTab: tab
      });
    }
  }

  return (
    <Layout>
      <SEO title="Análisis"/>
      <Row className="page-title align-items-center">
        <Col xl={12}>
          <h4 className="mb-1 mt-0">Perfil de Empresa</h4>
        </Col>
      </Row>
      <Row>
        <Col xl={4}>
          <CompanyProfile />
        </Col>
        <Col lg={8}>
          <Card>
            <CardBody>
              <Nav className="nav nav-pills navtab-bg nav-justified">
                <NavItem>
                  <NavLink
                    href="#"
                    className={classNames({ active: tabs.activeTab === '1' })}
                    onClick={() => toggleTab('1')}
                  >
                    Análisis
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    className={classNames({ active: tabs.activeTab === '2' })}
                    onClick={() => toggleTab('2')}
                  >
                    Archivos
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    className={classNames({ active: tabs.activeTab === '3' })}
                    onClick={() => toggleTab('3')}
                  >
                    Actividad
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    className={classNames({ active: tabs.activeTab === '4' })}
                    onClick={() => toggleTab('4')}
                  >
                    Tareas
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={tabs.activeTab}>
                <TabPane tabId="1">
                  <Analysis />
                </TabPane>
                <TabPane tabId="2">
                  <Files />
                </TabPane>
                <TabPane tabId="3">
                  <Activities />
                </TabPane>
                <TabPane tabId="4">
                  <h1>Tareas</h1>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default CompanyPage