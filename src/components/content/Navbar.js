import React,{useContext} from 'react';
import { Link,NavLink } from 'react-router-dom';
import { Navbar,Nav } from 'react-bootstrap';
import Logo from '../../Images/Company_logo.png'
import {AuthContext} from '../../Context/contextAuth'

export default () => {
const {user,logout} = useContext(AuthContext)

console.log(user)



  
  return (
    <div>
    {user ? <Navbar collapseOnSelect expand="lg"  className="fixed-top shadow-lg align-content-end">
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <li className="navbar-brand">
    <Link><img src={Logo} 
  
    className="company_logo" alt="Company_logo"></img></Link>
    </li>
  <Navbar.Collapse id="responsive-navbar-nav">
  
    <Nav className="mr-auto">
    <li className="nav-item">
      <NavLink 
      activeClassName="active"
      className="nav-link" id="dashboard" to="/dashboard"
      >Dashboard</NavLink>
      </li>
      <li className="nav-item">
      <NavLink
      activeClassName="active"
      className="nav-link" to="/employee" id="employee"
      aria-controls="responsive-navbar-nav" 
      >Employee</NavLink>
      </li>
       <li className="nav-item">
      <NavLink
      activeClassName="active"
      className="nav-link menuStyle" to="/payroll" id="payroll">payroll </NavLink >
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
      <Link
      
      className="nav-link"><i className="fas fa-search"></i></Link>
      </li>
      <li className="nav-item">
      <NavLink 
      to="/settings"
      activeClassName="active"
      className="nav-link"><i className="fas fa-cog"></i></NavLink>
      </li>
      <li className="nav-item">
      <Link 
    
      className="nav-link"><i className="fas fa-bell"></i></Link>
      </li>
      <li className="nav-item">
      <Link 
    
    className="nav-link">
    <img src={user.profileImg} className="profile_pic" alt="profile_pic"></img> 
    </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"
        onClick={logout}
        to="/"
        ><i className="fas fa-sign-out-alt">
          </i> <span className="login_register_nav"> Logout</span></Link>
      </li>
      </Nav>
  
      
  </Navbar.Collapse>

</Navbar>: <div></div>}
    
<br></br>
<br></br>
<br></br>

    </div>
  );
}
