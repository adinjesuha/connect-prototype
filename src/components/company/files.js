import React from 'react';
import { Link } from 'gatsby';
import { Row, Col, Card, UncontrolledTooltip } from 'reactstrap';
import { FiX, FiDownloadCloud, FiFilePlus } from 'react-icons/fi';

import { files } from './data';


const File = file => (
  <Card className="mb-2 shadow-none border">
    <div className="py-1 px-2">
      <Row className="align-items-center">
        <Col className="col-auto">
          <div className="avatar-sm font-weight-bold mr-3">
            <span
              className="avatar-title rounded bg-soft-primary text-primary"
            >
              <FiFilePlus className="uil-file-plus-alt font-size-18" />
            </span>
          </div>
        </Col>
        <Col className="pl-0">
          <a 
            href="/"
            className="text-muted font-weight-bold"
          >
            {file.name}
          </a>
          <p className="mb-0">{file.size}</p>
        </Col>
        <Col className="col-auto">
          <Link 
            to="/company-page" 
            className="btn btn-link text-muted btn-lg p-0" 
            id={`download-${file.id}`}
          >
            <FiDownloadCloud className='uil uil-multiply'/>
          </Link>
          <UncontrolledTooltip placement="bottom" target={`download-${file.id}`}>Download</UncontrolledTooltip>
          <Link 
            to="/company-page" 
            className="btn btn-link text-danger btn-lg p-0 ml-1" 
            id={`delete-${file.id}`}
          >
            <FiX className='uil uil-multiply'/>
          </Link>
          <UncontrolledTooltip placement="bottom" target={`delete-${file.id}`}>Delete</UncontrolledTooltip>
        </Col>
      </Row>
    </div>
  </Card>
)

const Files = () => (
  <React.Fragment>
    <h5 className="mt-3">Files</h5>
    {files.map((file, i) => (
      <File {...file} key={i} />
    ))}
  </React.Fragment>
);

export default Files;
