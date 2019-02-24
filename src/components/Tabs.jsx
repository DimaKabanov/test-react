import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';
import {
  Tabs as TabsWrapper,
  Tab,
  TabList,
  TabPanel,
} from 'react-tabs';
import { uniqueId } from 'lodash';

class Tabs extends Component {
  state = {
    activeTabIndex: 0,
    tabs: [
      { id: uniqueId(), title: 'Tab 1', text: 'Tab text 1' },
      { id: uniqueId(), title: 'Tab 2', text: 'Tab text 2' },
      { id: uniqueId(), title: 'Tab 3', text: 'Tab text 4' },
    ],
  }

  componentDidMount() {
    const { cookies } = this.props;
    if (!cookies) {
      return;
    }
    const savedActiveTabIndex = cookies.get('activeTabIndex');
    const newActiveTabIndex = savedActiveTabIndex || 0;
    this.setState({ activeTabIndex: Number(newActiveTabIndex) });
  }

  saveActiveTabIndex = (tabIndex) => {
    const { cookies } = this.props;
    if (!cookies) {
      return;
    }
    cookies.set('activeTabIndex', tabIndex);
  }

  onSetActiveTabIndex = (tabIndex) => {
    this.setState({ activeTabIndex: tabIndex });
    this.saveActiveTabIndex(tabIndex);
  };

  onAddNewTab = () => {
    const { tabs } = this.state;
    const nextId = uniqueId();
    const newTab = { id: nextId, title: `Tab ${nextId}`, text: `Tab text ${nextId}` };
    this.setState({ tabs: [...tabs, newTab] });
  }

  onRemoveTab = tabId => () => {
    const { tabs } = this.state;
    this.setState({ tabs: tabs.filter(({ id }) => id !== tabId) });
  }

  renderTab = tabs => tabs.map(({ id, title }) => (
    <Tab data-test="tab-control" key={id}>
      {title}
    </Tab>
  ))

  renderTabPanel = tabs => tabs.map(({ id, text }) => (
    <TabPanel key={id}>
      {text}
      <button type="button" data-test="remove-tab-btn" onClick={this.onRemoveTab(id)}>
        {`Remove tab ${id}`}
      </button>
    </TabPanel>
  ))

  render() {
    const { tabs, activeTabIndex } = this.state;
    return (
      <TabsWrapper selectedIndex={activeTabIndex} onSelect={this.onSetActiveTabIndex}>
        <button type="button" data-test="add-tab-btn" onClick={this.onAddNewTab}>
          Add tab
        </button>
        <TabList data-test="tab-controls-container">
          {this.renderTab(tabs)}
        </TabList>
        <React.Fragment>
          {this.renderTabPanel(tabs)}
        </React.Fragment>
      </TabsWrapper>
    );
  }
}

export default Tabs;
