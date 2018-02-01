import React, { Component } from 'react';
import InfoTable from '../InfoTable/InfoTable';
import info from './FreelancerInfo.module.css';

const personalInfo = {
  'first name': 'Jorge',
  'last name': 'Brock',
  'location': 'United Kingdom',
  'timezone': 'London, Lisbon ... UTC/GMT + 00:00',
  'native speaker': 'Yes',
  'primary language': 'US English'
}

const proInfo = {
  'capable roles': 'Chief editor, Editor, Content developer',
  'employment status': 'Full time',
  'tags': ['expertise:ESP','works fast'],
  'documents': ['freelancer_assessment.doc']
}

const experience = {}

class FreelancerInfo extends Component {
  render() {
    return (
      <div className={info.FreelancerInfo}>
        <InfoTable title='Personal Information' info={personalInfo}/>
        <InfoTable title='Professional Information' info={proInfo}/>
        <InfoTable title='Experience' info={experience}/>
      </div>
    )
  }
}

export default FreelancerInfo;
