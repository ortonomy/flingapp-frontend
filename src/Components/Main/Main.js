import React from 'react';
import Home from '../Home/Home';
import Project from '../Project/Project';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/project' component={Project}/>
        </Switch>
    </main>
)

export default Main;
