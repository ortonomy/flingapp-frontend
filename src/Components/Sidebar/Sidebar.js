import React, { Component } from 'react';
import Search from '../Search/Search'
import Create from '../Create/Create'
import Recent from '../Recent/Recent'
import styles from './Sidebar.module.css';


class Sidebar extends Component {
  render() {
    return (
      <div className={styles.Sidebar}>
        <Search />
        <Create />
        <Recent />
      </div>
    )
  }
}

export default Sidebar;
