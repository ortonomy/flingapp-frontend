// react
import React, { Component } from 'react';

// component dependencies
import FormFeedback from '../FormFeedback';

// validation checking for different input types
import * as Validation from './Validation';

// styles
import styles from './FormInputAnimated.module.css';

// debug
import Debug from '../../utils/Debug';

class FormInputAnimated extends Component {
  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.state = {
      feedback: null
    };
  }

  validate(validity, type, value) { // validate the input based on ruleset
    const validationState = Validation.validityList.reduce( (start, next) => {
      if ( validity[next] && start.length === 0 ) {
        start.push(next);
      }
      return start;
    },[]);
    Debug.log('[validate] of <FormInputAnimated />', validationState);
    if ( validationState.length !== 0 ) {
      this.setState({ feedback: {type: 'error', message: Validation[type][validationState[0]] }});
      this.props.passValue(null, false);
      return;
    }
    this.setState({ feedback: null });
    if ( validity.valid ) {
      this.props.passValue(value, true);
    }
    return;
  }

  handleChange(e) {
    Debug.log('[handleChange] of <FormInputAnimated />', e.target.value);
    this.validate(e.target.validity, this.props.type, e.target.value);
    if ( e.target.value ) {
      e.target.parentNode.childNodes[1].classList.add(styles.hasText);
      return;
    }
    e.target.parentNode.childNodes[1].classList.remove(styles.hasText);
  }

  render() {
    return (
      <div className={styles.FormInputAnimated}>
        <div className={styles.FormElements}>
          <input onInput={this.handleChange} name={this.props.name} type={this.props.type} minLength={this.props.type === 'password' ? '8' : '1'} pattern={Validation[this.props.type].pattern}  required />
          <label htmlFor={this.props.name}>{this.props.text}</label>
        </div>
        <div className={styles.Feedback}>
          <FormFeedback
            message={this.state.feedback ? this.state.feedback.message : ''}
            type={this.state.feedback ? this.state.feedback.type: ''}
          />
        </div>
      </div>
    )
  }
}

export default FormInputAnimated;
