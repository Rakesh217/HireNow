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
    category: this.props.category,
  };
  componentDidMount() {
    this.props.dispatch(get_employees());
  }

  static getDerivedStateFromProps(props, state) {
    if (props.allEmployee !== state.allEmployees) {
      return { allEmployees: props.allEmployee };
    }
    if (props.category !== state.category) {
      return { category: props.category };
    }
  }
  render() {
    console.log("allemp", this.state.allEmployees);
    const { allEmployees, category } = this.state;
    let data;
    if (category !== "") {
      data = allEmployees.filter(
        (item) => item.skills.indexOf(this.state.category) !== -1
      );
    } else {
      data = allEmployees;
    }

    return (
      <div className="displayCards">
        {data
          ? data.map((item) => {
              return (
                <div className="cards">
                  <h3>
                    {item.firstName}, {item.lastName}
                  </h3>
                  <strong className="displayblock">
                    {" "}
                    Email: {item.emailId}
                  </strong>
                  <strong> Hourly Rate: {item.rate}</strong>
                  <strong> City: {item.city}</strong>
                  <strong> State: {item.state}</strong>
                  <strong> Zip Code: {item.zip}</strong>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allEmployee: state.employee.allEmployees,
  };
};
export default connect(mapStateToProps)(index);
