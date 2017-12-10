import React from 'react';
import Freelancer from '../../components/Freelancer/Freelancer';
import Project from '../../components/Project/Project';
import NavBar from '../../components/NavBar/NavBar';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <main>
        <NavBar />
        <Switch>
            <Route path='/freelancer' component={Freelancer}/>
            <Route path='/project'    component={Project}/>
            <Route path='/'           component={Freelancer}/>

        </Switch>
    </main>
)

export default Main;
