// action type constants
export const FREELANCER_QUERY = 'FREELANCER_QUERY';
export const FREELANCER_INFO = 'FREELANCER_INFO'

// all action types
export const actionTypes = {
  FREELANCER_QUERY,
  FREELANCER_INFO
};

// action creators
export const freelancerQuery = id => (
  {
    type: FREELANCER_QUERY,
    payload: id
  }
);

export const freelancerInfo = data => (
  {
    type: FREELANCER_INFO,
    payload: data
  }
)

// all action creators
export const actions = {
  freelancerQuery,
  freelancerInfo
}
