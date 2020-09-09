import React, { Component } from 'react';
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../../img/1.jpg';
import image2 from '../../img/2.jpg';
import image3 from '../../img/3.jpg';
import image4 from '../../img/4.jpg';

export default class index extends Component {
    render() {
        return (
            <div>
         <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Hire Now</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Find Projects</Nav.Link>
      <NavDropdown title="Settings" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Feedback</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Contact Us</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<div>
<AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={image1} className="sliderimg"/>
      <img src={image2} className="sliderimg"/>
      <img src={image3} className="sliderimg"/>
      <img src={image4} className="sliderimg"/>
</AliceCarousel>
</div>
</div>

        );
    }
}
