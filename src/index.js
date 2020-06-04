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
import store from './store'



const httpLink = createHttpLink({
  uri: 'https://new-function-test.azurewebsites.net/graphql?code=JdYHdL6Qo0Mm47jtmAm68qYlkp5mffyzDuaZyPP0ufuoogFko/s/7A=='
})

const authLink = setContext(()=>{
  let token = localStorage.getItem('JWT_Token')
  if(token){
  const jwt_Token_decoded = Jwt_Decode(localStorage.getItem("JWT_Token"));
  if (jwt_Token_decoded.exp * 1000 <= Date.now()) {
    localStorage.clear();
    store.dispatch({type: 'LOGOUT'}); 
    history.push('/');
   }
  return{
    headers:{
      Authorization: token ? `${token}` : ''
    }
  }
}
})

const client = new ApolloClient({
  link: authLink.concat(httpLink) ,
  cache: new InMemoryCache(),
  
});
ReactDOM.render(

    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
,
 document.getElementById('root'));

