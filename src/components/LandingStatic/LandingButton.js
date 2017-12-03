// basic react imports
import React from 'react';

// styles
import styles from './LandingButton.module.css';

const LandingButton = (props) => {
  return (
    <button className={ [styles['fling-button'], styles[`${props.size}`], styles[`${props.color}`], props.float ? styles[`${props.float}`] : ''].join(' ')}>
      { props.size === 'cta' && (
        <i className={ ['fa',props.icon].join(' ') }></i> 
      )}
      { props.text }
    </button>
  )
}

export default LandingButton;