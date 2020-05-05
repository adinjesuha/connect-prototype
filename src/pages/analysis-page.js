import React from 'react';
import { Row, Col } from 'reactstrap';

import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../components/analysisComponents/about';
import CompanyProfile from '../components/company/company-profile';

const analysisData = [
  {
    sampleName: 'Pizza Congelada',
    sampleType: 'Alimento',
    parameters: [
      { id: 1, parameter: 'E. coli', results: 'valor', username: 'valor' },
      { id: 2, parameter: 'Coliformes totales', results: 'valor', username: 'valor' },
      { id: 3, parameter: 'Mohos y Levaduras', results: 'valor', username: 'valor' },
      { id: 4, parameter: 'Salmonella spp.', results: 'valor', username: 'valor' },
      { id: 5, parameter: 'Listeria Monocytogenes', results: 'valor', username: 'valor' },
    ]
  },
  {
    sampleName: 'Jugo de Naranja',
    sampleType: 'Materia Prima',
    parameters: [
      { id: 1, parameter: 'E. coli', results: 'valor', username: 'valor' },
      { id: 2, parameter: 'Coliformes totales', results: 'valor', username: 'valor' },
      { id: 3, parameter: 'Coliformes fecales', results: 'valor', username: 'valor' },
      { id: 4, parameter: 'Enterobacterias', results: 'valor', username: 'valor' },
      { id: 5, parameter: 'Bacterias Lácticas', results: 'valor', username: 'valor' },
      { id: 6, parameter: 'Listeria monocytogenes', results: 'valor', username: 'valor' },
      { id: 7, parameter: 'E. coli O157:H7', results: 'valor', username: 'valor' },
    ]
  },
]


const AnalysisPage = () => {
  const data = {
    reportNumber: '001-01-2020',
    client: 'Lacthosa Centro',
  }

  return (
    <Layout>
    
      <SEO title="Análisis"/>

      <Row className="page-title">
        <Col sm={8} xl={6}>
          <h4 className="mb-1 mt-0">{`Análisis de Laboratorio No. ${data.reportNumber}`}</h4>
        </Col>
        <Col sm={4} xl={6} className="text-md-right">
          <div className="btn-group ml-2 d-none d-sm-inline-block">
            <button type="button" className="btn btn-primary btn-md">Editar</button>
          </div>
          <div className="btn-group ml-1 d-none d-sm-inline-block">
            <button type="button" className="btn btn-danger btn-md">Eliminar</button>
          </div>
        </Col>
      </Row>

      <Row>

        <Col xl={4}>
          <CompanyProfile />
        </Col>

        <Col xl={8}>
        {analysisData.map((sample, i) => (
          <About key={i} {...sample}/>
        ))}
        </Col>

      </Row>

    </Layout>
  )
}

export default AnalysisPage