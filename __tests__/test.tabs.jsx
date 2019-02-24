import 'react-log-state';
import App from '../src/components/App';

ReactLogState.logAll();

const tabControlsSelector = 'li[data-test="tab-control"]';
const addNewTabBtnSelector = '[data-test="add-tab-btn"]';
const removeTabBtnSelector = '[data-test="remove-tab-btn"]';
const tabControlsContainerSelector = 'ul[data-test="tab-controls-container"]';

const getSelector = app => ({
  getTabControlList: () => app.find(tabControlsSelector),
  getTabControsContainer: () => app.find(tabControlsContainerSelector),
  getTabByIndex: index => app.find(tabControlsSelector).at(index),
  getAddNewTabBtn: () => app.find(addNewTabBtnSelector),
  getRemoveTabBtn: () => app.find(removeTabBtnSelector),
});

describe('Tabs snapshot', () => {
  test('Renders', () => {
    const app = mount(<App />);
    expect(app.render()).toMatchSnapshot();
  });

  test('Click to second tab', () => {
    const app = mount(<App />);
    const s = getSelector(app);
    const secondTab = s.getTabByIndex(1);

    secondTab.simulate('click');
    expect(app.render()).toMatchSnapshot();
  });
});

describe('Tabs without snapshot', () => {
  test('Correct switching to second tab', () => {
    const app = mount(<App />);
    const s = getSelector(app);
    const secondTab = s.getTabByIndex(1);

    secondTab.simulate('click');

    const firstTab = s.getTabByIndex(0);
    const updatedSecondTab = s.getTabByIndex(1);

    expect(firstTab).toHaveProp('aria-selected', 'false');
    expect(updatedSecondTab).toHaveProp('aria-selected', 'true');
  });

  test('Correct adding new tab', () => {
    const app = mount(<App />);
    const s = getSelector(app);
    const addNewTabBtn = s.getAddNewTabBtn();

    addNewTabBtn.simulate('click');

    const tabControlsContainer = s.getTabControsContainer();
    expect(tabControlsContainer).toContainMatchingElements(4, tabControlsSelector);
  });

  test('Correct removal tab', () => {
    const app = mount(<App />);
    const s = getSelector(app);
    const removeTabBtn = s.getRemoveTabBtn();

    removeTabBtn.simulate('click');

    const tabControlsContainer = s.getTabControsContainer();
    expect(tabControlsContainer).toContainMatchingElements(2, tabControlsSelector);
  });

  test('Correct set active tab after reload', () => {
    const cookiesStub = () => {
      const cookies = {};
      return {
        set: (name, value) => { cookies[name] = value; },
        get: name => cookies[name],
      };
    };
    const cookies = cookiesStub();
    const app = mount(<App cookies={cookies} />);
    const s = getSelector(app);
    const secondTab = s.getTabByIndex(1);
    expect(secondTab).toHaveProp('aria-selected', 'false');

    secondTab.simulate('click');

    const app2 = mount(<App cookies={cookies} />);
    const s2 = getSelector(app2);

    const updatedSecondTab = s2.getTabByIndex(1);
    expect(updatedSecondTab).toHaveProp('aria-selected', 'true');
  });
});
