import React from 'react';
import banner from './FreelancerBanner.module.css';

function FreelancerBanner (props) {
    return (
      <div className={banner.FreelancerBanner}>
        <div className={banner.text}>
          <h2>{props.name}</h2>
          <div className={banner.active}>{props.status}</div>
        </div>
        <div className={banner.title}>{props.title}</div>
      </div>
    )
}

export default FreelancerBanner;
