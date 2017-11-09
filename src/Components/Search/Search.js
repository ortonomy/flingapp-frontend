import React, { Component } from 'react';
import search from './Search.module.css';
import sidebar from '../Sidebar/Sidebar.module.css';

class Search extends Component {

  search() {
    return true;
  }

  render() {
    return (
      <div className={search.Search}>
        <div className={sidebar.sectionTitle}>
          <i className='fa fa-search'></i>
          <span>Search</span>
        </div>
        <div className={search.box}>
          <input type="text" onClick={this.search} placeholder="find projects and freelancers" />
        </div>
      </div>
    )
  }
}

export default Search;
