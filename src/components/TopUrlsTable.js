import React from 'react'
import TopUrlsCell from './TopUrlsCell'
import { Table } from 'semantic-ui-react'
import { connect }  from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions/index';

class TopUrlsTable extends React.Component {

  render() {

    const cells = this.props.topUrls
    .map((url) => {
      return(
        <TopUrlsCell
          shortened_url={"http://localhost:3000/api/v1/urls/" + url.slug}
          decoded_url={url.decoded_url}
          access_count={url.access_count}
        />
      )
    })

    return(
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Short Url</Table.HeaderCell>
            <Table.HeaderCell>Times accessed</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {cells}
        </Table.Body>
      </Table>
    )
  }
}

const mapStateToProps = state => {
  return {topUrls: state.topUrls}
}

export default withRouter(connect(mapStateToProps, actions)(TopUrlsTable))
