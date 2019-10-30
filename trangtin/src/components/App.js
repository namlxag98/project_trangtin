import React from 'react';
import './../css/App.css';
import Nav from './Nav.js';
import Footer from './Footer.js';
import DieuHuongURL from '../router/DieuHuongURL';
import {
  BrowserRouter as Router
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <DieuHuongURL/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
