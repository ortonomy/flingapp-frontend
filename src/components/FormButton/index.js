// react
import React, { Component } from 'react';

//styles 
import styles from './FormButton.module.css';



class FormButton extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    this.props.submit();
  }

  render () {
    const content = (<span><i className={[this.props.icon, 'fa'].join(' ')}></i> {this.props.text}</span>);
    return (
        <div onClick={this.handleClick} className={[styles.Button, this.props.disabled ? styles.disabled : ''].join(' ')}>{content}</div>
      );
  }
  
}

export default FormButton;