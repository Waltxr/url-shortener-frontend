import React from 'react'
import CreateShortUrlForm from './CreateShortUrlForm'
import * as actions from '../actions/index';
import { connect }  from 'react-redux';
import { withRouter } from 'react-router';
import ShortenedUrl from './ShortenedUrl'
import TopUrlsTable from './TopUrlsTable'
import FixedHeader from './FixedHeader'
import { Container, Header } from 'semantic-ui-react'

class Home extends React.Component {

  componentWillMount() {
    this.props.getTopUrls()
  }

  shortenUrl = (url) => {
    this.props.getShortUrl(url)
  }

  render() {
    return(
      <div>
        <FixedHeader />
        <Container>
          <CreateShortUrlForm onSubmit={ this.shortenUrl } />
          <ShortenedUrl shortenedUrl={ this.shortenedUrl }/>
          <Header as="h3">
            Top 100 Most Frequently Accessed URLS
          </Header>
          <TopUrlsTable />
        </Container>
      </div>
    )
   }

  }

  const mapStateToProps = state => {
    return {shortenedUrl: state.shortenedUrl}
  }

  export default withRouter(connect(mapStateToProps, actions)(Home));
