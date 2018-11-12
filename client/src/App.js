import React, { Component } from 'react';
import Todo from './components/Todo.js';
import './App.css';
import NavBar from './components/Navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
       <Todo/>
      </div>
    );
  }
}



export default App;
