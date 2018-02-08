// basic react
import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.js';
import FreelancerBody from '../../components/FreelancerBody/FreelancerBody';

// styles
import freelancer from './Freelancer.module.css';

//library dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { actions } from './actions';

const freelancer_id = 'f0892a5b-3c22-45be-964f-c87d95c4923a';

@connect(
  state => ({
  state: state,
}),
  dispatch => ({
    freelancerQuery: bindActionCreators(actions.freelancerQuery, dispatch)
  })
)
class Freelancer extends Component {
  constructor (props) {
      super(props);

      this.getFreelancer = this.getFreelancer.bind(this);
  }

  getFreelancer(id) {
      this.props.freelancerQuery(id)
  }

  componentWillMount() {
      this.getFreelancer(freelancer_id);
  }

  render() {
    return (
      <div className={freelancer.Freelancer}>
        <Sidebar />
        <FreelancerBody freelancer={this.props.state.Freelancer.current_freelancer} />
      </div>
    )
  }
}

export default Freelancer;
