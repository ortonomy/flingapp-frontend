// react
import React, { Component } from 'react';

// library dependencies
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// component dependencies
import { Login } from '../Login';
import { Landing } from '../Landing';
import Activate from '../Activate';
import Main from '../../components/Main/Main.js';
import LogOutRedirect from '../Auth/LogOutRedirect';

//debug 
import Debug from '../../utils/Debug';

@connect(
  state => ({
    state: state
  }),
  null
)
class App extends Component {
  render() {
    Debug.log('[render] of <App>: ', this.props.state);
    return (
      <Router>
        <Switch>
          <Route path="/main" component={Main}/>
          <Route path="/activate" component={Activate} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Login}/>
          <Route path="/activation" component={Login}/>
          <Route path="/logout" component={LogOutRedirect}/>
          <Route path="/" component={Landing}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
