import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import * as actions from '../actions/index';
import { connect }  from 'react-redux';
import { withRouter } from 'react-router';

class ErrorModal extends Component {

  render() {
    console.log('this.state:');
    console.log(this.state)
    console.log('this.props:');
    console.log(this.state)

    return (
      <Modal
        open={this.props.modalOpen}
        onClose={this.props.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' content='Error' />
        <Modal.Content>
          <h3>{this.props.userErrors}</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.props.handleModalClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    modalOpen: state.modalOpen,
    userErrors: state.userErrors
  }
}

export default withRouter(connect(mapStateToProps, actions)(ErrorModal))
