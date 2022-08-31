import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import { BrouserRouter, Router, Route, Switch } from "react";





function App() {
  return (
    <div className="App">
     <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
