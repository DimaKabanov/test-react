import App from '../src/components/App';

const tabsData = [
  {
    id: 0,
    title: 'Tab 1',
    text: 'Tab text 1',
  },
  {
    id: 1,
    title: 'Tab 2',
    text: 'Tab text 2',
  },
  {
    id: 2,
    title: 'Tab 3',
    text: 'Tab text 3',
  },
];

describe('Tabs snapshot', () => {
  test('Renders', () => {
    const wrapper = mount(<App tabs={tabsData} />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Click to second tab', () => {
    const wrapper = mount(<App tabs={tabsData} />);
    const tabControls = wrapper.find('[data-test="tab-control"]');
    const secondTab = tabControls.at(2);

    secondTab.simulate('click');
    expect(wrapper.render()).toMatchSnapshot();
  });
});
