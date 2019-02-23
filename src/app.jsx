import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './components/Tabs';

const tabsData = [
  {
    id: 0,
    title: 'Mario',
    text: 'Mario ipsum dolor sit, amet consectetur adipisicing elit.',
  },
  {
    id: 1,
    title: 'Peach',
    text: 'Peach ratione laudantium inventore ullam debitis optio rerum eum modi.',
  },
  {
    id: 2,
    title: 'Yoshi',
    text: 'Yoshi animi odit officia temporibus est enim, quas at facilis officiis? Itaque!',
  },
];

export default () => {
  ReactDOM.render(
    <Tabs tabs={tabsData} />,
    document.getElementById('root'),
  );
};
