import React, { Component } from 'react';
import logo from './spinner.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Art Dart!</h1>
        </header>
        <p className="App-intro">
          The tool to check your philistiney status
        </p>
      </div>
    );
  }
}

export default App;
