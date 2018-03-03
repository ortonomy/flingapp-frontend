import React, { Component } from 'react';
import InfoTable from '../InfoTable';
import info from './FreelancerInfo.module.css';

class FreelancerInfo extends Component {
  render() {
    const personalInfo = {
      'first name': this.props.freelancer.flFirstName,
      'last name': this.props.freelancer.flLastName,
      'location': this.props.freelancer.flLocation,
      'timezone': this.props.freelancer.flTimezone,
      'native speaker': this.props.freelancer.flIsNativeSpeaker ? 'Yes' : 'No',
      'primary language': this.props.freelancer.flPrimaryLanguage
    }
    const proInfo = {
      'capable roles': 'Chief editor, Editor, Content developer',
      'employment status': this.props.freelancer.flEmploymentStatus,
      'tags': ['expertise:ESP','works fast'],
      'documents': ['freelancer_assessment.doc']
    }
    const experience = {}

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
