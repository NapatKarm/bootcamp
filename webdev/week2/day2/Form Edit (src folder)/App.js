import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Form from "./Components/Form/Form"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form first ="Chicken" last="Wing"/>
      </header>
    </div>
  );
}

export default App;
