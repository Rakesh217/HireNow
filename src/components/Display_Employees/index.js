import React, { Component } from "react";
import {
  Card,
  CardColumns,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import image1 from "../../img/tom.jpg";
import { connect } from "react-redux";
import { get_employees } from "../../redux/actions/employees";
class index extends Component {
  state = {
    allEmployees: [],
  };
  componentDidMount() {
    this.props.dispatch(get_employees());
  }

  static getDerivedStateFromProps(props, state) {
    if (props.allEmployee !== state.allEmployees) {
      return { allEmployees: props.allEmployee };
    }
  }
  render() {
    console.log("allemp", this.state.allEmployees);
    let p = this.state.allEmployees
      ? this.state.allEmployees[0].map((item) => {
          return (
            <Card className="cards">
              <Card.Body>
                <Card.Title>
                  {item.firstName}, {item.lastName}
                </Card.Title>
                <Card.Text>
                  Email: {item.emailId}
                  Hourly Rate: {item.rate}
                  City: {item.city}
                  State: {item.state}
                  Zip Code: {item.zip}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })
      : null;
    return <div className="displayCards">{p}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    allEmployee: state.employee.allEmployees,
  };
};
export default connect(mapStateToProps)(index);
