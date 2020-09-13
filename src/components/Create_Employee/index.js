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
        skills: [],
        rate: "",
        city: "",
        state: "",
        zip: "",
      },
      loading: false,
      errors: {},
      options: [],
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

    this.props.history.push("/");
    // }
  };

  onChange = (e) =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });

  onChangeOption = (e) => {
    let list = ["Java", "HTML", "CSS", "Angular", "ReactJS"];
    const options = this.state.data.skills;
    let index;
    if (e.target.checked) {
      options.push(list[+e.target.value - 1]);
    } else {
      index = options.indexOf(list[+e.target.value - 1]);
      options.splice(index, 1);
    }
    console.log("skills", options);
    this.setState({ data: { skills: options } });
  };
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

            <label>
              Java
              <input type="checkbox" value={1} onChange={this.onChangeOption} />
            </label>

            <label>
              HTML
              <input type="checkbox" value={2} onChange={this.onChangeOption} />
            </label>
            <label>
              CSS
              <input type="checkbox" value={3} onChange={this.onChangeOption} />
            </label>
            <label>
              Angular
              <input type="checkbox" value={4} onChange={this.onChangeOption} />
            </label>
            <label>
              React js
              <input type="checkbox" value={5} onChange={this.onChangeOption} />
            </label>
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

export default connect()(index);
