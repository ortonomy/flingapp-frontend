import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import home from './Home.module.css'

class Home extends Component {
    render() {
        return(
            <div className={home.Home}>
                <Jumbotron>
                    <h1>Hello everyone!</h1>
                    <Button bsStyle="primary">Click me!</Button>
                </Jumbotron>
            </div>
        )
    }
}

export default Home;
