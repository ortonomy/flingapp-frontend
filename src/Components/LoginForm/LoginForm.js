import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import './LoginForm.css';


class LoginForm extends Component {
    handleChange() {
        return 0;
    }

    render() {
        return (
            <form className="LoginForm">
                <FormControl
                    className="form-element input"
                    type="text"
                    value=""
                    placeholder="Email"
                    onChange={this.handleChange}
                 />
                 <FormControl
                     className="form-element input"
                     type="text"
                     value=""
                     placeholder="Password"
                     onChange={this.handleChange}
                  />
                <a className="form-link">I've forgotten my password.</a>
                <div className="form-element btn-primary">LOGIN</div>
            </form>
        )
    }
}

export default LoginForm;
