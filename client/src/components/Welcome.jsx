import React from 'react'
import { Button, Form,Segment, Container } from 'semantic-ui-react'

const Welcome = () => {
  return (
    <Container text>
    <br></br>
    <div className="p-3 mb-2 bg-secondary text-white"><b>OTP App </b></div>
    <Segment>
      <Form>

        <Form.Field>
          <label>Welcome, OTP validated..</label>
        </Form.Field>
      </Form>
    </Segment>
  </Container> 
  )
}

export default Welcome