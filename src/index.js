import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App'

import App from './App';

import { BrowserRouter, HashRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,

  document.getElementById("root")
);