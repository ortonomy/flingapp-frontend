// author: Ortonomy, 2018, v1

// react
import React from 'react';

//styles
import styles from './FormText.module.css';

const FormText = ({ text, handleClick, ...props}) => {
  return (
    <p onClick={handleClick ? handleClick : null} className={styles.Element}>{text}</p>
  );
}

export default FormText;