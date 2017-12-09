import React from 'react';
import styles from './FormFeedback.module.css';


const FormFeedback = (props) => {
  const icon = props.type === 'error' ? (<i className="fa fa-times"></i>) : (<i className="fa fa-info"></i>);
  if ( props.message ) {
    return (
      <p className={[styles.Feedback, styles[props.type]].join(' ')}>{ icon} { props.message }</p>
    )
  }
  return null;
}

export default FormFeedback;
