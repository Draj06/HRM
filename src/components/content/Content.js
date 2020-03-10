import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import dashboard from '../../Views/layouts/dashboard';
import employees from '../../Views/layouts/employees';
import payroll from '../../Views/layouts/payroll';
import login from '../../Views/auth/login';
import register from '../../Views/auth/register';
import NavBar from './Navbar'
import { Switch, Route } from 'react-router-dom';

export default props => (
    <Container fluid className={classNames('content', {'is-open': props.isOpen})}>
      <NavBar toggle={props.toggle}/>
      <Switch>
        <Route exact path="/dashboard" component={ dashboard } /> 
        <Route exact path="/" component={ dashboard } />  
        <Route exact path="/login" component={ login } />            
        <Route exact path="/register" component={ register } />
        <Route exact path="/employees" component={ employees } />
        <Route exact path="/payroll" component={ payroll } />
        
      </Switch>
    </Container>
)
