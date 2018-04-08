import React, { Component } from 'react';
import Home from './components/Home'
import { Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path ='/' component= { Home } />
      </div>
    );
  }
}

export default App;
