import React from 'react'
import * as actions from '../actions/index';
import { connect }  from 'react-redux';
import { withRouter } from 'react-router';

const ShortenedUrl = props => (
  <div>
    <br></br>
      <a href={props.shortenedUrl} target='_blank'>{props.shortenedUrl}</a>
    <br></br>
  </div>
)

const mapStateToProps = state => {
  return {shortenedUrl: state.shortenedUrl}
}

export default withRouter(connect(mapStateToProps, actions)(ShortenedUrl))
