import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

const CreateShortUrlForm = () => (
  <Segment inverted>
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid label='url' placeholder='enter url' />        
      </Form.Group>      
      <Button type='submit'>Submit</Button>
    </Form>
  </Segment>
)
export default CreateShortUrlForm
