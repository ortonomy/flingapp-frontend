import React, { Component } from 'react';
import UserIsAuthenticated from '../Auth/UserIsAuthenticated';

@UserIsAuthenticated
class Project extends Component {
    render() {
        return(
            <div className="Project">
                This is a project!
            </div>
        )
    }
}

export default Project;
