import React, { Component } from 'react';
import RecentItem from '../RecentItem/RecentItem';
import recent from './Recent.module.css';
import sidebar from '../Sidebar/Sidebar.module.css';

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
      freelancers.push(<RecentItem key={f.name} icon='user' displayText={f.name} linkTarget={f.url} />)
    }

    for (let p of recentProjects) {
      projects.push(<RecentItem key={p.name} icon='folder-o' displayText={p.name} linkTarget={p.url} />)
    }

    return (
      <div className={recent.Recent}>
        <div className={sidebar.title}>
          <i className='fa fa-eye'></i>
          <span>Recently Viewed</span>
        </div>
        <div className={recent.container}>
          <i className="fa fa-users" aria-hidden="true"></i>
          <span>Freelancers</span>
          {freelancers}
        </div>
        <div className={recent.container}>
          <i className="fa fa-sticky-note" aria-hidden="true"></i>
          <span>Projects</span>
          {projects}
        </div>
      </div>
    )
  }
}

export default Recent;
