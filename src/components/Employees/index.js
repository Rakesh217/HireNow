import React, { Component } from "react";
import Employees from "../Display_Employees/index";
import Filter from "../Filter/index";
import { Container, Row, Col } from "react-bootstrap";

export default class index extends Component {
  state = {
    category: "",
  };

  changeHandle = (value) => {
    console.log("categoruyggggg", value);

    this.setState({ category: value });
  };
  render() {
    console.log("categoruy", this.state.category);

    return (
      <div className="displayRows">
        <aside className="displayAside">
          <Filter Filter={(value) => this.changeHandle(value)}></Filter>
        </aside>

        <section className="displaySection">
          <Employees category={this.state.category}></Employees>
        </section>
      </div>
    );
  }
}
