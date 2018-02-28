// fling.work API utility functions
// @ortonomy, jan 2018

import axios from 'axios';

import Debug from '../Debug';

class API {
  static async isLoggedIn(jwt) {
    const query = this.generateThisUserQuery();
    return await this.Axios('POST', '/graphql', query, jwt)
    .then ( response => ( response.thisUser ) ) 
    .catch ( err => {
      Debug.log(err);
      return null;
    });
  }

  static Axios(method = 'POST', endpoint = '/graphql', query = {}, auth = null ) {
    return new Promise((res, rej) => {
      const config = {
        method: `${method}`,
        responseType: 'json',
        headers: {
          'Content-Type': 'application/json',
        },
        url: `http://localhost:3001${endpoint}`,
        data: JSON.stringify({query})
      };
      if ( auth ) {
        config.headers['Authorization'] = `Bearer ${auth}`;
      }
      axios(
        config
      )
      .then ( response => ( response.data ))
      .then ( response => {
        Debug.log('At API.Axios response: ', response);
        if ( response.hasOwnProperty('errors') ) {
          throw(new Error(`detail: ${response.errors[0].detail}, message: ${response.errors[0].message}`));
        }
        res(response.data);
      })
      .catch ( err => {
        Debug.log('At API.Axios error catch: ', err);
        rej(err.message);
      })
    })
  }

  static generateThisUserQuery() {
    return `
      query {
        thisUser {
          userAccId
          userEmail
          userEmailConfirmed
          userPasswordResetRequested
          userFirstName
          userLastName
          userOrg
        }
      }
    `;
  }

  static generateRegisterQuery({ firstName, lastName, email, password}) {
    return `
      mutation { 
        usrRegisterUser ( input: { 
          firstName: "${firstName}",
          lastName: "${lastName}",
          email: "${email}", 
          password: "${password}"
        }) {
          registeredUser {
            userId
            firstName
            lastName
            email
            accountSelector 
            accountVerifier
            accountActivated
          }
        }
      }
    `;
  }

  static generateLoginQuery({email, password}) {
    return `
      query {
        authenticate ( 
          email: "${email}", 
          password: "${password}"
        )
      }
    `;
  }

  static generateActivateQuery({selector, verifier}) {
    return `
      mutation {
        activateUser( input: {
          selector: "${selector}",
          verifier: "${verifier}"
        }) {
          jwtToken
        }
      }
    `;
  }
}

export default API;
