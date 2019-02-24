import React from 'react';
import Tabs from './Tabs';

const App = props => (
  <div>
    <h1>My first React App</h1>
    <Tabs cookies={props.cookies} />
  </div>
);

export default App;
