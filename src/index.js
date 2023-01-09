import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client';

import { Provider } from 'react-redux';
import store from './store';

import { ThemeProvider } from "styled-components";
import BasicTheme from './themes/basicTheme';

const backendUri = 'http://graafeja.tahtisadetta.fi/graphql';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: backendUri,
  })
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ThemeProvider theme={BasicTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </ApolloProvider>
);

