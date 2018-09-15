import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import image from './assets/rickandmorty_ep308_002_Way_Ahead_Of_The_Reveal.jpg'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <img src={image}/>
        </p>
      </div>
    );
  }
}

export default App;
