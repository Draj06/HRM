import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';


const client = new ApolloClient({

  uri: 'https://duru-hrms-api.azurewebsites.net/graphql?code=GAm6nwwgzO3hAKaaa/ChrenUc2f3MuVZvi6ma3pSh/9Caq0DYO9QDg==',
  cache: new InMemoryCache()
});
ReactDOM.render(

    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
,
 document.getElementById('root'));

