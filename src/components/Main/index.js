// react
import React from 'react';

// library dependencies
import { Switch, Route } from 'react-router-dom';

// component dependencies
import withLogin from '../../containers/Auth/withLogin';
import withActivation from '../../containers/Auth/withActivation';
import { Freelancer } from '../../containers/Freelancer';
import Project from '../Project';
import NavBar from '../NavBar';



const Main = () => (
    <main>
        <Switch>
            <Route path='/project'    component={Project}/>
        </Switch>
    </main>
)

export default withLogin(withActivation(Main));
