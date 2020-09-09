import React from 'react';
import './App.css';
import Header from './components/Header/index';
import Home from './components/Home/index';
import Employees from './components/Employees/index';
import Filter from './components/Filter/index';
import Create_Employee from './components/Create_Employee/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-alice-carousel/lib/alice-carousel.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Create_Employee></Create_Employee>
      </header>
    </div>
  );
}

export default App;

//  <Home></Home>
//        <Employees></Employees>
