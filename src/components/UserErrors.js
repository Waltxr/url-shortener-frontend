import React from 'react'
import * as actions from '../actions/index';
import { connect }  from 'react-redux';
import { withRouter } from 'react-router';

const UserErrors = props => (
  <div>
    <br></br>
      <p className='UserErrors'>{props.userErrors}</p>
    <br></br>
  </div>
)

const mapStateToProps = state => {
  return {userErrors: state.userErrors}
}

export default withRouter(connect(mapStateToProps, actions)(UserErrors))
