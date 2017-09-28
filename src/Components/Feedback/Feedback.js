import React from 'react';
import './Feedback.css';


function Feedback (props)  {
  return(
    <div className="Feedback">
      <div className="content">{props.message}</div>
    </div>
  )
}


export default Feedback;
