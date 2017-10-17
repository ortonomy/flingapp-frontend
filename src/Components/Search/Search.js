import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <div className='sidebar-section-title'>
          <i className='fa fa-search'></i>
          <span>Search</span>
        </div>
      </div>
    )
  }
}

export default Search;
