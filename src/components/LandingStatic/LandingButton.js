// basic react imports
import React from 'react';

// routing
import { withRouter } from 'react-router-dom';

// styles
import styles from './LandingButton.module.css';

const LandingButton = withRouter(( props ) => {
  const { history } = props;
  return (
    <button onClick={ () => ( history.push(`${props.link}`) )} className={ [styles['fling-button'], styles[`${props.size}`], styles[`${props.color}`], props.float ? styles[`${props.float}`] : ''].join(' ')}>
      { props.size === 'cta' && (
        <i className={ ['fa',props.icon].join(' ') }></i> 
      )}
      { props.text }
    </button>
  )
})

export default LandingButton;