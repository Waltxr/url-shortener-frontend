import React from 'react'
import CreateShortUrlForm from './CreateShortUrlForm'
import * as actions from '../actions/index';
import { connect }  from 'react-redux';
import { withRouter } from 'react-router';
import ShortenedUrl from './ShortenedUrl'


class Home extends React.Component {

  shortenUrl = (url) => {
    this.props.getShortUrl(url)
  }

  render() {
    return(
      <div>
        <CreateShortUrlForm onSubmit={ this.shortenUrl } />
        <ShortenedUrl shortenedUrl={ this.shortenedUrl }/>
      </div>
    )
   }
  }

  const mapStateToProps = state => {
    return {shortenedUrl: state.shortenedUrl}
  }

  export default withRouter(connect(mapStateToProps, actions)(Home));
