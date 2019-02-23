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

test('Tabs renders correctly', () => {
  const wrapper = mount(<Tabs tabs={tabsData} />);
  expect(wrapper.render()).toMatchSnapshot();

  const tabBtn1 = wrapper.find('[data-tab-id="tab-0"] .react-tabs__tab');
  const tabBtn2 = wrapper.find('[data-tab-id="tab-1"] .react-tabs__tab');
  const tabBtn3 = wrapper.find('[data-tab-id="tab-2"] .react-tabs__tab');

  tabBtn2.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  tabBtn3.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  tabBtn1.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
});
