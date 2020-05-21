import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';


import './App.css';


import Routes from './components/content/Content'
import { BrowserRouter as Router } from "react-router-dom";

export default () => {


  return (
    <Router>
    
      <div className="App wrapper">
        <Routes/>
      </div>
    
    </Router>
  );
}

