import React from 'react';
import Tabs from './Tabs';

const App = (props) => {
  const { tabs } = props;

  return (
    <div>
      <h1>My first React App</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;
