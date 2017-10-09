import React from 'react';
import './InfoTable.css';

const InfoTable = (props) => {
  const tableData = []
  for (let [key,value] of Object.entries(props.info)) {
    const row = <tr><td className="table-key">{key}</td><td className="table-value">{value}</td></tr>
    console.log(row)
    tableData.push(row)
  }
  return (
    <div className='InfoTable'>
      <div className='info-title'>{props.title}</div>
      <table className='info-table'>
        {tableData}
      </table>
    </div>
  )
}

export default InfoTable;
