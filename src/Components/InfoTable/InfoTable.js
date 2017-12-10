import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Tag from '../Tag/Tag'
import uuid from 'uuid/v4'
import table from './InfoTable.module.css';

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
      const row = <Row key={uuid()} className={table.row}><Col key={uuid()} className={table.key} xs={6} md={4}>{key}</Col><Col key={uuid()} className={table.cell} xs={6} md={4}>{value}</Col></Row>
      tableData.push(row)
    }
  }
  return (
    <div className={table.InfoTable}>
      <div className={table.header}>
        <div className={table.title}>{props.title}</div>
        <div className={table.edit}>EDIT DETAILS</div>
      </div>
      <Grid fluid={true}>
        {tableData}
      </Grid>
    </div>
  )
}

export default InfoTable;
