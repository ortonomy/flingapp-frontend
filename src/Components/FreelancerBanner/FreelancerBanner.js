import React from 'react';
import './FreelancerBanner.css';

function FreelancerBanner (props) {
    return (
      <div className='FreelancerBanner'>
        <div className='banner-text'>
          <h2>{props.name}</h2>
          <div className='freelancer-status active'>{props.status}</div>
        </div>
        <div className="freelancer-title">{props.title}</div>
      </div>
    )
}

export default FreelancerBanner;
