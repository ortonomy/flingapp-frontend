import React, { Component } from 'react';
import './FormInputAnimated.css';

class FormInputAnimated extends Component {
  render() {
    return (
      <div className="FormInputAnimated">
        <div className="container">
          <input name={this.props.name} type="text" required />
          <label htmlFor={this.props.name}>{this.props.text}</label>
        </div>
      </div>
    )
  }
}

export default FormInputAnimated;
