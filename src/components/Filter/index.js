import React, { Component } from 'react'
import {Collapse, Button} from "react-bootstrap";

export default class index extends Component {
    state={
        open: false
    }
    render() {
        return (
            <>
      <Button
        onClick={() => this.setState({open: !this.state.open})}
        aria-controls="example-collapse-text"
        aria-expanded={this.state.open}
      >
        Categories
      </Button>
      <Collapse in={this.state.open}>
        <div id="example-collapse-text">
          <h3>IT</h3>
        <h3>Networking</h3>
        <h3>React JS</h3>
        <h3>Angular</h3>
        </div>
      </Collapse>
    </>
  );
        
    }
}
