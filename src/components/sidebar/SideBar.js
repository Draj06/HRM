import React from 'react';
import  { Collapse, NavItem, NavLink } from 'reactstrap';
import { Nav } from 'reactstrap';
import classNames from 'classnames'

const SideBar = props => (
    <div className={classNames('sidebar', {'is-open': props.isOpen})}>
      <div className="sidebar-header">
         <h2 className="headerText">HRMS</h2>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3 mt-5">
        <NavItem  className="pl-4 mb-1">
          <NavLink>
          Dashboard
          </NavLink>
            </NavItem>
            <NavItem  className="pl-4 mb-1">
              <NavLink>
              Employees
              </NavLink>
              
            </NavItem>
            <NavItem  className="pl-4 mb-1">
              <NavLink>
              Payroll
              </NavLink>
            </NavItem>
          
        </Nav>        
      </div>
    </div>
  );

  const submenus = [
    [
      {
        title: "Overview",
        target: "Overview"
      },
      {
        title: "Home 2",
        target: "Home-2",        
      },
      {
        itle: "Home 3",
        target: "Home-3",      
      }
    ],
    [
      {
        title: "Page 1",
        target: "Page-1",          
      },
      {
        title: "Page 2",
        target: "Page-2",        
      }
    ]
  ]
  

export default SideBar;
