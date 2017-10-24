import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Tag from '../Tag/Tag'
import uuid from 'uuid/v4'
import './InfoTable.css';

const InfoTable = (props) => {
  const tableData = []
  if (props.info) {
    for (let [key,value] of Object.entries(props.info)) {
      const elements = []
      if (Array.isArray(value)) {
        for (let item of value) {
          elements.push(<Tag key={uuid()} name={item} />)
        }
        value = <span>{elements}</span>
      }
      const row = <Row key={uuid()} className='table-row'><Col key={uuid()} className='table-key-cell table-cell' xs={6} md={4}>{key}</Col><Col key={uuid()} className='table-cell' xs={6} md={4}>{value}</Col></Row>
      tableData.push(row)
    }
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
