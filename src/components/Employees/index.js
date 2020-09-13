import React, { Component } from "react";
import Employees from "../Display_Employees/index";
import Filter from "../Filter/index";
import { Container, Row, Col } from "react-bootstrap";

export default class index extends Component {
  render() {
    return (
      <div className="displayRows">
        <aside className="displayAside">
          <Filter></Filter>
        </aside>

        <section className="displaySection">
          <Employees></Employees>
        </section>
      </div>
    );
  }
}
