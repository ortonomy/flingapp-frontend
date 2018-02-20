// react
import React from 'react';

// library dependencies
import { Switch, Route } from 'react-router-dom';

// component dependencies
import withLogin from '../../containers/Auth/withLogin';
import withActivation from '../../containers/Auth/withActivation';
import withOrg from '../../containers/Auth/withOrg';
import Freelancer from '../Freelancer/Freelancer';
import Project from '../Project/Project';
import NavBar from '../NavBar/NavBar';



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

export default withLogin(withActivation(withOrg(Main)));
