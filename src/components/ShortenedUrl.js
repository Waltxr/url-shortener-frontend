import React from 'react'
import * as actions from '../actions/index';
import { connect }  from 'react-redux';
import { withRouter } from 'react-router';

const ShortenedUrl = props => (
  <a href={props.shortenedUrl} target='_blank'>{props.shortenedUrl}</a>
)

const mapStateToProps = state => {
  return {shortenedUrl: state.shortenedUrl}
}

export default withRouter(connect(mapStateToProps, actions)(ShortenedUrl))
