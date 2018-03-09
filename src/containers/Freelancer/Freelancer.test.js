import React from 'react';
import ReactDOM from 'react-dom';
import Freelancer from '../Freelancer';

// Actions
import { actions, actionTypes } from './actions';

// Reducers
import reducer from './reducer';


// Test actions

const exampleFreelancer = {
  flFirstName: 'Example',
  flLastName: 'Freelancer',
  flIsNativeSpeaker: true,
  flLocation: 'Shanghai',
  flTimezone: 'CST',
  flPrimaryLanguage: 'English',
  flEmploymentStatus: 'FULL_TIME'
}

describe('freelancer actions', () => {
  it ('should create an action to query a freelancer by ID', () => {
    const ID = 'id-string'
    const expectedAction = {
      type: actionTypes.FREELANCER_QUERY,
      payload: ID
    }
    expect(actions.freelancerQuery(ID)).toEqual(expectedAction);
  })
  it ('should create an action to add current freelancer info to the store', () => {

    const expectedAction = {
      type: actionTypes.FREELANCER_INFO,
      payload: exampleFreelancer
    }
    expect(actions.freelancerInfo(exampleFreelancer)).toEqual(expectedAction);
  })
})

// Test reducers
describe('freelancer reducer', () => {
  it('should return the initial state', () => {

  })
  it('should handle FREELANCER_QUERY', () => {
    expect(reducer({}, {
      type: actionTypes.FREELANCER_QUERY,
      id: 'id-string'
    })).toEqual(
      {
        loading_freelancer: true
      }
    )
  })
  it('should handle FREELANCER_INFO', () => {
    expect(reducer({}, {
      type: actionTypes.FREELANCER_INFO,
      payload: { node: exampleFreelancer }
    })).toEqual(
      {
        loading_freelancer: false,
        current_freelancer: exampleFreelancer
      }
    )
  })
})
