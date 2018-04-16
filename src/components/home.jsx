import React, { Component } from 'react';
import logo from '../spinner.gif';
import '../App.css';
import _ from 'react-swf';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Andrew Wenman</h1>
          <span className="subtitle">
              <div class="subtitle"> geek + curious + nerd + creative + cunning = ME </div>
              <a href="https://github.com/Awenman">github</a>
          </span>

        </header>
        <p className="App-links">

        </p>
      </div>
    );
  }
}

export default Home;
