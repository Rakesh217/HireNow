import React, { Component } from 'react';
import {Form, Button, Col} from "react-bootstrap";

export default class index extends Component {
    render() {
        return (
            <div>
                <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Last Name" />
    </Form.Group>
  </Form.Row>

  <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <div key={`inline-checkbox`} className="mb-3">
    <Form.Label>Skills</Form.Label>
      <Form.Check inline label="HTML5" type={"checkbox"} id={`inline-checkbox}-1`} />
      <Form.Check inline label="CSS3" type={"checkbox"} id={`inline-checkbox}-2`} />
      <Form.Check inline label="JavaScript" type={"checkbox"} id={`inline-checkbox}-2`} />
    </div>

<Form.Group as={Col} controlId="formGridRate">
      <Form.Label>Rate</Form.Label>
      <Form.Control />
    </Form.Group>
    
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
        )
    }
}
