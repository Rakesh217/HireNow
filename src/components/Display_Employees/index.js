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
      data = allEmployees.filter((item) => item.skills[0].includes(category));
      console.log("ss", data);
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
                  <h7 className="displayblock">
                    <b>Email: </b>
                    {item.emailId}
                  </h7>
                  <h7 className="displayblock">
                    <b>Hourly Rate: </b>
                    {item.rate}
                  </h7>
                  <h7 className="displayblock">
                    <b>Skills:</b>
                    {item.skills}
                  </h7>
                  <h7 displayblock>
                    <b> City: </b>
                  </h7>
                  {item.city}
                  <h7>
                    <b> State: </b>
                    {item.State}
                  </h7>
                  <h7>
                    <b>Zip Code: </b>
                    {item.zip}
                  </h7>
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
