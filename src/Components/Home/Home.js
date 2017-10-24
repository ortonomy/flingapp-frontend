import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './Home.css'

class Home extends Component {
    render() {
        return(
            <div className="Home">
                <Jumbotron>
                    <h1>Hello everyone!</h1>
                    <Button bsStyle="primary">Click me!</Button>
                </Jumbotron>
            </div>
        )
    }
}

export default Home;
