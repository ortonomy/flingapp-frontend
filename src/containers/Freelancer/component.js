// basic react
import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.js';
import FreelancerBody from '../../components/FreelancerBody/FreelancerBody';
import NavBar from '../../components/NavBar/NavBar'

// styles
import freelancer from './Freelancer.module.css';

//library dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { actions } from './actions';

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

  getFreelancer() {
    if (this.props.match.params.id) {
      this.props.freelancerQuery(this.props.match.params.id)
    }
  }

  componentWillMount() {
      this.getFreelancer();
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className={freelancer.Freelancer}>
        <Sidebar />
        <FreelancerBody freelancer={this.props.state.Freelancer.current_freelancer} />
        </div>
      </div>
    )
  }
}

export default Freelancer;
