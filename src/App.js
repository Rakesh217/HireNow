import React from 'react';
import './App.css';
import Header from './components/Header/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-alice-carousel/lib/alice-carousel.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
    </div>
  );
}

export default App;
