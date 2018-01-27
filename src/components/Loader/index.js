// standard react
import React from 'react';

//styles
import styles from './Loader.module.css';

// assets
import Oval from '../../assets/images/oval@svg.svg';
import Sector from '../../assets/images/sector@svg.svg';

const Loader = props => {
  return (
    <div className={styles.Loader}>
      <img className={[styles.LoaderBase, styles.LoaderElement].join(' ')} src={Oval} alt="" />
      <img className={[styles.LoaderPip, styles.LoaderElement].join(' ')} src={Sector} alt="" />
    </div>
  )
};

export default Loader;