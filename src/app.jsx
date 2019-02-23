import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

export default (data) => {
  ReactDOM.render(
    <App tabs={data} />,
    document.getElementById('root'),
  );
};
