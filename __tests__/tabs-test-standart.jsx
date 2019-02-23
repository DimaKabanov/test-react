import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from '../src/components/Tabs';

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

test('Tabs 1', () => {
  const component = renderer.create(<Tabs tabs={tabsData} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
