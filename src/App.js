import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {AuthProvider} from './Context/contextAuth'
import history from './History/history';
import './App.css';
import Routes from './components/content/Content'
import { Router } from "react-router-dom";

export default () => {
  
  
  return (
    <AuthProvider>
    <Router history={history}>
      <div className="App wrapper">
        <Routes/>
      </div>
    </Router>
  </AuthProvider>
    
  );
}

