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
    if ( !this.props.disabled ) {
      this.props.submit();
      return;
    }
    return;
  }

  render () {
    const content = (<span><i className={[this.props.icon, 'fa'].join(' ')}></i> {this.props.text}</span>);
    return (
        <div onClick={this.handleClick} className={styles.Button}>{content}</div>
      );
  }
  
}

export default FormButton;