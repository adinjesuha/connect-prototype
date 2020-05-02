import React from 'react'
import { Row, Col } from 'reactstrap';

import Statistics from './statistics';
import RevenueChart from './revenueChart';
import TargetChart from './targetChart';
import SalesChart from './salesChart';
import Orders from './orders';


const AllCharts = () => (
  <React.Fragment>
    {/* stats */}
    <Statistics />
    {/* charts */}
    <Row>
      <Col xl={6}>
        <RevenueChart />
      </Col>
      <Col xl={6}>
        <TargetChart />
      </Col>
    </Row>
    {/* charts */}
    <Row>
      <Col xl={5}>
        <SalesChart />
      </Col>
      <Col xl={7}>
        <Orders />
      </Col>
    </Row>
  </React.Fragment>
)

export default AllCharts;