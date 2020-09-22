import React, { Component } from "react";
import { Collapse, Button } from "react-bootstrap";

export default class index extends Component {
  state = {
    open: false,
  };
  render() {
    return (
      <>
        <Button
          onClick={() => this.setState({ open: !this.state.open })}
          aria-controls="example-collapse-text"
          aria-expanded={this.state.open}
        >
          Categories
        </Button>
        <Collapse in={this.state.open}>
          <div id="example-collapse-text">
            <p
              onClick={() => {
                this.props.Filter("Java");
              }}
            >
              Java
            </p>
            <p
              onClick={() => {
                this.props.Filter("CSS");
              }}
            >
              CSS
            </p>
            <p
              onClick={() => {
                this.props.Filter("HTML");
              }}
            >
              HTML
            </p>
            <p
              onClick={() => {
                this.props.Filter("ReactJS");
              }}
            >
              React JS
            </p>
            <p
              onClick={() => {
                this.props.Filter("Angular");
              }}
            >
              Angular
            </p>
          </div>
        </Collapse>
      </>
    );
  }
}
