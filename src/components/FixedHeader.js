import React from 'react'
import { Container, Menu } from 'semantic-ui-react'

class Navbar extends React.Component {

  render() {
    return(
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item>
            A url shortener by Adam Walter
          </Menu.Item>
        </Container>
      </Menu>
    )
  }

}

export default Navbar
