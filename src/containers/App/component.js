// basic react imports
import React, { Component } from 'react';
import Main from '../../components/Main/Main';

// user components
import Login from '../../components/Login/Login';
import { Switch, Route } from 'react-router-dom';

// styles
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
