import React, { Component } from 'react';
import classes from './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import About from './Components/About/About';
import Users from './Components/Users/Users';
import Home from './Components/Home/Home';
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
       
      <Router>
        <Navbar />
        <Sidebar />
        <div className={classes.container}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </div>
     </Router>
    </div>
    
    );
  }
}



export default App;
