import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import 'config';

import 'normalize.css';
import 'sources/styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);