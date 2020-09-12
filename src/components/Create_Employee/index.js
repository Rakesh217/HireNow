import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { create_employees } from "../../redux/actions/employees";
import { connect } from "react-redux";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstName: "",
        lastName: "",
        emailId: "",
        skills: "Java",
        rate: "",
        city: "",
        state: "",
        zip: "",
      },
      loading: false,
      errors: {},
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    // const errors = this.validate(this.state.data);
    // this.setState({ errors });
    console.log("Data", this.state.data);
    // if (Object.keys(errors).length === 0) {
    const {
      firstName,
      lastName,
      emailId,
      skills,
      rate,
      city,
      state,
      zip,
    } = this.state.data;
    this.props.dispatch(
      create_employees({
        firstName: firstName,
        lastName: lastName,
        emailId: emailId,
        skills: skills,
        rate: rate,
        city: city,
        state: state,
        zip: zip,
      })
    );
    // }
  };

  onChange = (e) =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });

  render() {
    return (
      <div className="Add_Employee">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <div class="col-xs-2">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="firstName"
                  value={this.state.data.firstName}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Enter First Name"
                />
              </div>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <div class="col-xs-2">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="lastName"
                  value={this.state.data.lastName}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Enter Last Name"
                />
              </div>
            </Form.Group>
          </Form.Row>

          <Form.Group as={Col} controlId="formGridEmail">
            <div class="col-xs-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="emailId"
                value={this.state.data.emailId}
                onChange={this.onChange}
                type="email"
                placeholder="Enter email"
              />
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
            <Form.Control
              name="rate"
              value={this.state.data.rate}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                name="city"
                value={this.state.data.city}
                onChange={this.onChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                name="state"
                value={this.state.data.state}
                onChange={this.onChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                name="zip"
                value={this.state.data.zip}
                onChange={this.onChange}
              />
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

const mapStateToProps = (state) => {
  return {
    // userObject: state.auth.user,
    // checkEmail: state.auth.checkEmail,
  };
};

export default connect(mapStateToProps)(index);
