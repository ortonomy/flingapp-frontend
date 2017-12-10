import React, { Component } from 'react';
import Freelancer from '../../components/Freelancer/Freelancer';
import Project from '../../components/Project/Project';
import NavBar from '../../components/NavBar/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import styles from './Main.module.css';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

@connect(
  state => ({
    state: state,
  })
)
class Main extends Component {
    render() {
      return (<main className={styles.Main}>
        <NavBar />
        <Switch>
            <Route path='/freelancer' component={Freelancer}/>
            <Route path='/project'    component={Project}/>
            <Redirect from='/' to='/freelancer' />
        </Switch>
    </main>)
  }
}

export default Main;
