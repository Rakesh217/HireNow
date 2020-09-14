import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import AddEmployee from "./components/Create_Employee/index";
import Employees from "./components/Employees/index";
import Contact from "./components/Contact_Us/index";
import Footer from "./components/Footer/index";
import Header from "./components/Header/index";
export default function Routes() {
  return (
    <Router>
      <header className="App-header">
        <Header></Header>
      </header>
      <Route exact path="/" component={Home} />
      <Route exact path="/AddEmployee" component={AddEmployee} />
      <Route exact path="/Employees" component={Employees} />
      <Route exact path="/ContactUs" component={Contact} />
      <Footer></Footer>
    </Router>
  );
}
