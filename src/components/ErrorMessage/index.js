// react
import React from 'react';

// styles
import styles from './style.module.css';

const ErrorMessage = ({messages, ...props}) => {
  return (
      <div className={styles.ErrorMessage}> 
        <p className={[styles.Feedback, styles.error].join(' ')}><i className="fa fa-times"></i> { messages && messages.map( (m, i) => {
          return (<span key={i}>{m}</span>);
        }) }</p>
      </div>
  )
}

export default ErrorMessage;