import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import cookies from './cookies';

export default () => {
  ReactDOM.render(
    <App cookies={cookies} />,
    document.getElementById('root'),
  );
};
