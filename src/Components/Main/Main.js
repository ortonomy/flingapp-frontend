import React from 'react';
import Home from '../Home/Home';
import Project from '../Project/Project';
import Login from '../Login/Login';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/project' component={Project}/>
            <Route path='/login' component={Login}/>
        </Switch>
    </main>
)

export default Main;
