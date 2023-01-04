import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  gql
} from '@apollo/client'

/*
https://stackoverflow.com/questions/52130918/web-api-error-this-request-has-been-blocked-the-content-must-be-served-over-h
*/
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://graafeja.tahtisadetta.fi/graphql',
  })
});

const query = gql`
  query {
    users {
      name
    }
  }
`;

client.query({ query })
  .then((response) => {
    console.log(response.data)
  })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

