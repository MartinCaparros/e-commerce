import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import reportWebVitals from './reportWebVitals';
import { theme } from './styled';
import './App.css';


ReactDOM.render(
    <React.StrictMode>
        <App> 
            <ThemeProvider theme = { theme }>
                <Router>
                </Router>
            </ThemeProvider>
        </App>
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();