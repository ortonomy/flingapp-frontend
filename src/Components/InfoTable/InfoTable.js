import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Tag from '../Tag/Tag'
import './InfoTable.css';

const InfoTable = (props) => {
  const tableData = []
  for (let [key,value] of Object.entries(props.info)) {
    const elements = []
    if (Array.isArray(value)) {
      for (let item of value) {
        elements.push(<Tag name={item} />)
      }
      value = <span>{elements}</span>
    }
    const row = <Row className='table-row'><Col className='table-key-cell table-cell' xs={6} md={4}>{key}</Col><Col className='table-cell' xs={6} md={4}>{value}</Col></Row>
    tableData.push(row)
  }
  return (
    <div className='InfoTable'>
      <div className="info-header">
        <div className='info-title'>{props.title}</div>
        <div className='info-edit'>EDIT DETAILS</div>
      </div>
      <Grid>
        {tableData}
      </Grid>
    </div>
  )
}

export default InfoTable;
