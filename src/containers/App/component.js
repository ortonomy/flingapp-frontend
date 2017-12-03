// basic react imports
import React, { Component } from 'react';

// redux 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// routing 
import { Switch, Route } from 'react-router-dom';

// user components
import Login from '../../components/Login/Login';
import { Landing } from '../../containers/Landing';

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
    console.log(this.props.state);
    return (
        <div className={styles.App}>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/"      component={Landing}/>
          </Switch>
        </div>
    );
  }
}

export default App;
