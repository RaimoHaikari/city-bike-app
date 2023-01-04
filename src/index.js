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

let dev = false;
let uri = 'http://localhost:8000/graphql';

if (dev === false)
  uri = 'http://graafeja.tahtisadetta.fi/graphql';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: uri,
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

