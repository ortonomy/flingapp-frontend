import React from 'react';

// library dependencies
import { Link } from 'react-router-dom';

// styles
import styles from './LandingNav.module.css';

const LandingNavItems = ({ items, ...props}) => {
  return (
    <div className={styles.NavBarNavItems}>
      {
        items && items.map( (item, i) => {
          return (
            <div key={i}>
              { item.href ? (<Link to={item.href} ><span>{item.text}</span></Link>) : (<span>{item.text}</span>)}
            </div>
          )
        })
      }
    </div>
  );
}

export default LandingNavItems;