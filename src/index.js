import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // eslint-disable-line
import App from './App'; // eslint-disable-line
import registerServiceWorker from './registerServiceWorker'; // eslint-disable-line

/* global document */
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
