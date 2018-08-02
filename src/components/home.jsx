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
              <div class="subtitle"> ADVENTUROUS + CURIOUS + NERD + CREATIVE = ME </div>
              <a href="https://github.com/Awenman">github</a>
          </span>
        </header>
        <p className="App-links"></p>
        <footer className="footer">
          <h2>My Projects</h2>
          <h1><a href="https://ccadd-topshop.herokuapp.com/"><img className="topshop-logo" src="https://avatars0.githubusercontent.com/u/38440102?s=200&v=4"></img></a></h1>

          <p>
            An Ecommerce site model for buying hats!
          </p>
          <p>
            Built in React.js with React-Redux
          </p>


            <h1><a href="https://github.com/NutriYum"><img src="https://avatars3.githubusercontent.com/u/38917975?s=200&v=4"></img></a></h1>

          <p className="NutriYum">A mobile app for iOS and Android that
            indentifies and logs nutrional data on what
            you eat just by taking a picture!
          </p>
          <p className="NutriYum">Built with Watson AI, React Native, AWS and more!</p>

            <h1><a href="https://github.com/Awenman/WebDevMatch">WebDevMatch</a></h1>

          <p className="WebDev">A Freemium social media model for connecting Developers and businesses
          </p>
          <p className="WebDev">Built in Ruby</p>


        </footer>
      </div>
    );
  }
}

export default Home;
