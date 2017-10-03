import React from 'react';
import Freelancer from '../Freelancer/Freelancer';
import Project from '../Project/Project';
import NavBar from '../NavBar/NavBar';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <main>
        <NavBar />
        <Switch>
            <Route path='/freelancer' component={Freelancer}/>
            <Route path='/project'    component={Project}/>
            <Route path='/'           component={Project}/>

        </Switch>
    </main>
)

export default Main;
