import React, { Component } from 'react';
import RecentItem from '../RecentItem/RecentItem';
import './Recent.css';

const recentFreelancers = [{
  name: 'Jorge Brock',
  url: 'freelancer/101'
},{
  name: 'Lettie Hicks',
  url: 'freelancer/102'
},{
  name: 'Winifred Summers',
  url: 'reelancer/103'
}]


const recentProjects = [{
  name: 'DLA General English',
  url: 'project/101'
},{
  name: 'BE Update 2017',
  url: 'project/102'
},{
  name: 'Wordlists and Images',
  url: 'project/103'
}]

class Recent extends Component {
  render() {
    const projects = []
    const freelancers = []

    for (let f of recentFreelancers) {
      freelancers.push(<RecentItem icon='user' displayText={f.name} linkTarget={f.url} />)
    }

    for (let p of recentProjects) {
      projects.push(<RecentItem icon='folder-o' displayText={p.name} linkTarget={p.url} />)
    }

    return (
      <div className="Recent">
        <div className='sidebar-section-title'>
          <i className='fa fa-eye'></i>
          <span>Recently Viewed</span>
        </div>
        <div className='recent-container'>
          <i className="fa fa-users" aria-hidden="true"></i>
          <span>Freelancers</span>
          {freelancers}
        </div>
        <div className='recent-container'>
          <i className="fa fa-sticky-note" aria-hidden="true"></i>
          <span>Projects</span>
          {projects}
        </div>
      </div>
    )
  }
}

export default Recent;
