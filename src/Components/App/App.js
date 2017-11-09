import React, { Component } from 'react';
import Main from '../Main/Main';
import Login from '../Login/Login';
import { Switch, Route } from 'react-router-dom';
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
        <div className={styles.App}>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/"      component={Main}/>
          </Switch>
        </div>
    );
  }
}

export default App;
