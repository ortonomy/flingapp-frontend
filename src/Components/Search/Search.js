import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

  search() {
    return true;
  }

  render() {
    return (
      <div className="Search">
        <div className='sidebar-section-title'>
          <i className='fa fa-search'></i>
          <span>Search</span>
        </div>
        <div className="search-box">
          <input type="text" onClick={this.search} placeholder="find projects and freelancers" />
        </div>
      </div>
    )
  }
}

export default Search;
