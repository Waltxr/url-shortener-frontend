import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Message, Input } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'


class CreateShortUrlForm extends React.Component {

  urlInput({input, meta: { touched, error }, ...custom}) {
    const hasError = touched && error !== undefined;
    return (
      <div>
        {hasError &&
          <Message
            error
            header='Error'
            content={error} />}
        <Input
          error={hasError}
          fluid
          placeholder='Enter URL to be shortened...'
          {...input}
          {...custom} />
      </div>
    )
  }

  render() {
    return (
      <Container style={{marginTop: '10em'}}>
        <form onSubmit={this.props.handleSubmit}>
          <Field name="decoded_url" component={this.urlInput} />
          <br/>
          <Button fluid type="submit">Submit</Button>
        </form>
      </Container>
    );
  }

}

const validate = values => {
  const errors = {}
  if (!values.decoded_url || values.decoded_url.trim() === '') {
    errors.decoded_url = 'URL required'
  }
  return errors
}

export default reduxForm({
  form: 'shortenUrl',
  validate
})(CreateShortUrlForm)
