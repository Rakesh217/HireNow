import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";

export default class index extends Component {
  onSubmit = async () => {
    const body = {
      query: `mutation{
  addEmployee(Employee:{
    firstName: ""
    lastName: "A"
    emailId: "sairakesh@gmail.com"
   	skills: "HTML"
    rate: 65
    city: "Hyd"
    State: "TS"
    zip: 64428
  }){
    firstName
    lastName
  }
}`,
    };
    try {
      const data = await fetch("http://localhost:5000/api/", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="Add_Employee">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <div class="col-xs-2">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
              </div>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <div class="col-xs-2">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
              </div>
            </Form.Group>
          </Form.Row>

          <Form.Group as={Col} controlId="formGridEmail">
            <div class="col-xs-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </div>
          </Form.Group>

          <div key={`inline-checkbox`} className="mb-3">
            <Form.Label>Skills</Form.Label>
            <Form.Check
              inline
              label="HTML5"
              type={"checkbox"}
              id={`inline-checkbox}-1`}
            />
            <Form.Check
              inline
              label="CSS3"
              type={"checkbox"}
              id={`inline-checkbox}-2`}
            />
            <Form.Check
              inline
              label="JavaScript"
              type={"checkbox"}
              id={`inline-checkbox}-2`}
            />
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
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Button onClick={this.onSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
