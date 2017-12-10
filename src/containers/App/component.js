// basic react imports
import React, { Component } from 'react';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// routing
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// user components
import { Login } from '../Login';
import { Main } from '../Main';
import { Landing } from '../Landing';

// styles
import styles from './App.module.css';

// actions
import { actions  } from './actions';
const { appUpdate } = actions;


@connect(
  state => ({
    state: state
  }),
  dispatch => ({
    appUpdate: bindActionCreators(appUpdate, dispatch)
  })
)
class App extends Component {

  componentDidMount() {
    this.props.appUpdate('This is a test');
  }

  render() {
    return (
        <div className={styles.App}>
          <Router>
            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Login}/>
              <Route path="/landing" component={Landing}/>
              <Route path="/"      component={Main}/>
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
