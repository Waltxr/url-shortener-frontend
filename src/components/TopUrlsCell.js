import React from 'react'
import { Header, Table } from 'semantic-ui-react'

const TopUrlsCell = props => {
    return (
      <Table.Row>
        <Table.Cell>
          <Header as="h4">
            <Header.Content>
              <a href={props.shortened_url} target='_blank'>{props.shortened_url}</a>
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
