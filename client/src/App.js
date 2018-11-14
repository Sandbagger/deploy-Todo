import React, { Component } from 'react';
import Todo from './components/Todo.js';
import './App.css';
import Grid from '@material-ui/core/Grid';
import NavBar from './components/Navbar.js'

class App extends Component {
  render() {
    return (
    <div>
       <NavBar/>
        <Grid container
           alignItems = "center"
          direction = "column"
          spacing = {16}>
        <Grid item>
          <Todo/>
        </Grid>
      </Grid>
    </div>
    );
  }
}



export default App;
