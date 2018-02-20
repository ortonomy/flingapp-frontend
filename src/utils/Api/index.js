// fling.work API utility functions
// @ortonomy, jan 2018

import axios from 'axios';

import Debug from '../Debug';

class API {
  static async isLoggedIn(jwt) {
    return await this.Axios('POST', '/graphql', this.generateThisUserQuery(), jwt)
    .then ( response => ( response.thisUser ) ) 
    .catch ( err => {
      Debug.log(err);
      return null;
    });
  }

  static async hasOrgAccessRequestPending(jwt, id) {
    return await this.Axios('POST', '/graphql', this.generateOrgRequestQuery(id), jwt)
    .then ( response => ( response.orgRequestByRequestorId ) )
    .catch ( err => {
      Debug.log(err);
      return null;
    })
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

  static generateOrgSearchQuery(orgName) {
    return `
      query { 
        organizationByOrgName (orgName: "${orgName}") {
          orgDomain
          orgAdmin
          orgName
          orgId
        }
      }    
    `;
  }

  static generateCreateOrgMutation({user, name}) {
    return `
      mutation { 
        createOrganization (input: {
          organization: {
            orgAdmin: "${user}",
            orgName: "${name}"
          }
        }) {
          organization {
            orgAdmin
            orgName
            orgId
          }
        }
      }    
    `;
  }

  static generateUpdateUserByIdMutation({id, email, firstName, lastName, org}) {
    return `
      mutation { 
        usrUpdateUserById (input: {
            userIdIn: "${id}",
            userOrgIn: "${org}",
            userFirstNameIn: "${firstName}",
            userLastNameIn: "${lastName}",
            userEmailIn: "${email}"
        }) {
          simpleUser {
            userAccId
            userEmail
            userEmailConfirmed
            userPasswordResetRequested
            userFirstName
            userLastName
            userOrg
          }
        }
      }    
    `;
  }

  static generateRequestAccessToOrgMutation({org, requestor}) {
    return `
      mutation {
        requestAccessToOrg(
          input: {
            orgId:"${org}",
            requestorId: "${requestor}"
          }
        ) {
            accessRequest {
              reqId
              orgId
              orgName
              adminId
              adminEmail
              adminFirstName
              adminLastName
              requestorId
              requestorFirstName
              requestorLastName
              selector
              verifier
              requestStatus
            }
          }
      }
    `;
  }

  static generateOrgRequestQuery(id) {
    return `
      query {
        orgRequestByRequestorId (requestorId: "${id}") {
          orgId
          requestorId
          requestConfirmed
        }
      }
    `;
  }
}

export default API;
