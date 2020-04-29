import React from 'react'
import { Dropdown } from 'react-bootstrap';

const Header=()=> {
    return (
        <div className="container-fluid">
            <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
            <Dropdown>
          <Dropdown.Toggle className="primaryDarkColor" id="dropdown-basic">
            Add Company
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Add individually</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Add bulk</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
            </div>
         
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
              <select className="form-control">
                <option selected disabled>Sort by</option>
                <option>1</option>
                <option>1</option>
              </select>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
              <select className="form-control">
                <option selected disabled>Sort by</option>
                <option>1</option>
                <option>1</option>
              </select>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
              <select className="form-control">
                <option selected disabled>Sort by</option>
                <option>1</option>
                <option>1</option>
              </select>
            </div><div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
              <select className="form-control">
                <option selected disabled>Sort by</option>
                <option>1</option>
                <option>1</option>
              </select>
            </div>
            </div>
            
        </div>
    )
}

export default Header
