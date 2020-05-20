import React from 'react';
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

export default props => (
    <Container fluid className={classNames('content', {'is-open': props.isOpen})}>
      <NavBar/>
     
      <Switch>
        <Route exact path="/" component={ dashboard } />  
        <Route exact path="/dashboard" component={ dashboard } /> 
        <Route exact path="/login" component={ login } />            
        <Route exact path="/register" component={ register } />
        <Route exact path="/employee" component={ employees } />
        <Route exact path="/employee/employee_profile" component={ emp_profile } />
        <Route exact path="/payroll" component={ payroll } />
        <Route exact path="/settings" component={ settings } />
        <Route exact path="/companylist" component={ CompanyList } />
        <Route exact path="/addCompany" component={ AddCompany } />
        <Route exact path="/employee/addemployee" component={ AddEmployee } />
        <Route exact path="/employee/addemployeebulk" component={ AddEmployeeBulk } />
        <Route exact path="/test" component={ Test } />
        <Route exact path="*" component={ PageNotFound } />
        
      </Switch>
    </Container>
)
