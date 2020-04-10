import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar,Nav } from 'react-bootstrap';
import Logo from '../../Images/Company_logo.png'

export default () => {


  
  return (
    <div>
    <Navbar collapseOnSelect expand="lg"  className="fixed-top shadow-lg align-content-end">
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <li className="navbar-brand">
    <Link><img src={Logo} 
    to="/"
    className="company_logo" alt="Company_logo"></img></Link>
    </li>
  <Navbar.Collapse id="responsive-navbar-nav">
  
    <Nav className="mr-auto">
    <li className="nav-item">
      <Link className="nav-link" id="dashboard" to="/dashboard"
      >Dashboard</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/employee" id="employee"
      aria-controls="responsive-navbar-nav" 
      >Employee</Link>
      </li>
       <li className="nav-item">
      <Link className="nav-link menuStyle" to="payroll" id="payroll">payroll</Link>
      </li>
      
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
      
    </Nav>
   
    <Nav className="ml-auto">
    <li className="nav-item">
      <Link to="/"
      
      className="nav-link"><i className="fas fa-search fa-2x mr-3"></i></Link>
      </li>
      <li className="nav-item">
      <Link 
      to="/"
      className="nav-link"><i className="fas fa-bell fa-2x mr-3"></i></Link>
      </li>
      <li className="nav-item">
      <Link 
      to="/settings"
      className="nav-link"><i className="fas fa-cog fa-2x mr-3"></i></Link>
      </li>
      
    </Nav>
  </Navbar.Collapse>

</Navbar>
    
<br></br>
<br></br>
<br></br>
<br></br>
    </div>
  );
}
