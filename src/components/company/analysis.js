import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import classNames from 'classnames';

import { allTasks } from './data';


const TaskSummary = task => (
  <Row className={classNames('justify-content-sm-between', 'border-bottom', 'mt-2', 'pt-2', 'cursor-pointer')}>
    <Col xl={8} className="mb-lg-0">
      <p>{task.title}</p>
    </Col>
    <Col xl={4}>
      <div className="d-sm-flex justify-content-between">
        <div className="mt-3 mt-sm-0">
        </div>
      </div>
    </Col>
  </Row>
)

const Tasks = () => (
  <Card className="mb-0 shadow-none">
    <CardBody>
    {allTasks.map((task, index) => (
      <TaskSummary {...task} key={index} onClickHandler={() => { }} />
    ))}
    </CardBody>
  </Card>
)


export default Tasks;