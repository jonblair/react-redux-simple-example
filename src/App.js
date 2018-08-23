import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from './form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <MyForm />
      </div>
    );
  }
}

export default App;