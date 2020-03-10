import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Button, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom'



export default props => {

  const [isOpen, setOpen] = useState(false)
  const toggle = () => setOpen(!isOpen)
  
  return (
    <div>
    <Navbar color="light" light className="navbar shadow-sm p-3 mb-5 bg-white rounded" expand="md">
      <Button color="info" onClick={props.toggle}>
        <FontAwesomeIcon icon={faAlignLeft}/>
      </Button>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
        <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to='/register'><i className="fas fa-user-plus"></i> Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/login'><i className="fas fa-sign-in-alt" ></i> Login</Link>
                </li>
        </ul>
         
      </Nav>
      </Collapse>
    </Navbar>
  
    </div>
  );
}
