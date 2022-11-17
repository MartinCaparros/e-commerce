import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import reportWebVitals from './reportWebVitals';
import { theme } from './styled';
import { ApolloProvider } from '@apollo/client';
import client from './views/core/apolloInstance';
import './App.css';


ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App> 
                <ThemeProvider theme = { theme }>
                    <Router>
                    </Router>
                </ThemeProvider>
            </App>
        </ApolloProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();