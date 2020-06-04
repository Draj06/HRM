import React,{useContext} from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import dashboard from '../../Views/layouts/dashboard';
import emp_profile from '../../Views/layouts/emp_profile';
import employees from '../../Views/layouts/employees';
import payroll from '../../Views/layouts/payroll';
import settings from '../../Views/layouts/settings';
import CompanyList from '../../Views/layouts/CompanyList';
import AddCompany from '../../Views/layouts/addCompany';
import AddEmployee from '../../Views/layouts/addEmployee';
import AddEmployeeBulk from '../../Views/layouts/addEmployeeBulk';
import login from '../../Views/auth/login';
import register from '../../Views/auth/register';
import Test from '../../Views/auth/test';
import PageNotFound from '../error/pageNotFound'
import NavBar from './Navbar'
import { Switch, Route } from 'react-router-dom';
import {AuthContext} from '../../Context/contextAuth'
import {AuthRoute} from './authRoute'
import {LoginRoute} from './LoginRoute'




const Navbar =()=>{
  return(
    <div>
      <NavBar/>
      
     
      <Switch>
        
        <LoginRoute exact path="/" component={ login } />        
        <AuthRoute  path="/dashboard" component={ dashboard } /> 
        <AuthRoute  path="/register" component={ register } />
        <AuthRoute exact path="/employee" component={ employees } />
        <AuthRoute  path="/employee/employee_profile" component={ emp_profile } />
        <AuthRoute  path="/payroll" component={ payroll } />
        <AuthRoute  path="/settings" component={ settings } />
        <AuthRoute  path="/companylist" component={ CompanyList } />
        <AuthRoute  path="/addCompany" component={ AddCompany } />
        <AuthRoute  path="/employee/addemployee" component={ AddEmployee } />
        <AuthRoute  path="/employee/addemployeebulk" component={ AddEmployeeBulk } />
        <Route  path="/test" component={ Test } />
        <Route  path="*" component={ PageNotFound } />
        
      </Switch>
      </div>
    
)
  }
  export default Navbar
