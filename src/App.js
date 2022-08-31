import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';





function App() {
  return (
    <div className="App">
     <Router>
      <NavBar />
       <Route path='/' exact/>
      </Router>
    </div>
  );
}

export default App;
