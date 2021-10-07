import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import App from './App.jsx';
import './styles/errorboundary.scss';

render(
  <Router>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Router>,
  document.getElementById('root')
);
