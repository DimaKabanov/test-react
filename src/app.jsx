import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';

export default () => {
  ReactDOM.render(
    <Hello />,
    document.getElementById('root'),
  );
};
