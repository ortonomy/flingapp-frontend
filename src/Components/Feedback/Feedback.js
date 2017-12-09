import React from 'react';
import feedback from './Feedback.module.css';


function Feedback (props)  {
  return(
    <div className={feedback.Feedback}>
      <div className={feedback.content}>{props.message}</div>
    </div>
  )
}


export default Feedback;
