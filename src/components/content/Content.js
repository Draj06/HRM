import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import dashboard from '../../Views/layouts/dashboard';
import employees from '../../Views/layouts/employees';
import payroll from '../../Views/layouts/payroll';
import settings from '../../Views/layouts/settings';
import login from '../../Views/auth/login';
import register from '../../Views/auth/register';
import PageNotFound from '../error/pageNotFound'
import NavBar from './Navbar'
import { Switch, Route } from 'react-router-dom';

export default props => (
    <Container fluid className={classNames('content', {'is-open': props.isOpen})}>
      <NavBar/>
     
      <Switch>
        <Route exact path="/dashboard" component={ dashboard } /> 
        <Route exact path="/" component={ dashboard } />  
        <Route exact path="/login" component={ login } />            
        <Route exact path="/register" component={ register } />
        <Route exact path="/employee" component={ employees } />
        <Route exact path="/payroll" component={ payroll } />
        <Route exact path="/settings" component={ settings } />
        <Route exact path="*" component={ PageNotFound } />
        
      </Switch>
    </Container>
)
