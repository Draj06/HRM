import React,{useContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Jwt_Decode from "jwt-decode";
import ApolloClient from 'apollo-client'
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {setContext} from 'apollo-link-context'
import {createHttpLink} from 'apollo-link-http'
import history from './History/history'
import {AuthContext} from './Context/contextAuth'

