// basic react
import React from 'react';

// routing
import { Link } from 'react-router-dom';

//styles
import styles from './LoginTab.module.css';

const LoginTab = (props) => {
  return (
    <div className={[styles.LoginTab, props.active ? styles.LoginTabActive : ''].join(' ')}>
      <Link to={props.path} className={[styles.TabLink, props.active ? styles.TabLinkActive : ''].join(' ')}>
        <span>{props.text}</span>
      </Link>
    </div>
  )
}

export default LoginTab;
