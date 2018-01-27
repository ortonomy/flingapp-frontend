// basic react
import React from 'react';

// dependent components
import { Link } from 'react-router-dom';

// styles
import styles from './style.module.css';

const LoginFooter = (props) => {
  return (
    <div className={styles.Footer}>
      {
        props.links.map( (link, key) => {
          return (
            <Link key={key} to={link.route}>
              <span>&nbsp;{link.text}&nbsp;</span>{ key < props.links.length - 1 ? (<span>&nbsp;|&nbsp;</span>) : '' }
            </Link>
          )
        })
      }
    </div>
  );
}

export default LoginFooter