import React from 'react'
import { Header, Table } from 'semantic-ui-react'

const TopUrlsCell = props => {
    let url = `http://localhost:3001/api/v1/urls${props.shortened_url}`
    return (
      <Table.Row>
        <Table.Cell>
          <Header as="h4">
            <Header.Content>
              <a href={url} target='_blank'>{props.shortened_url}</a>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
          <Header as="h4">
            <Header.Content>
              <a href={props.decoded_url} target='_blank'>{props.decoded_url}</a>
            </Header.Content>
          </Header>
        </Table.Cell>

        <Table.Cell>
          <Header as="h4">
            <Header.Content>
              {props.access_count}
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
    )
}

export default TopUrlsCell
