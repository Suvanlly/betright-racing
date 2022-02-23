import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Globalstyle} from './style';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Globalstyle />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
