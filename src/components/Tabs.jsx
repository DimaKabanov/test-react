import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';
import {
  Tabs as TabsWrapper,
  Tab,
  TabList,
  TabPanel,
} from 'react-tabs';

class Tabs extends Component {
  renderTab = tabs => tabs.map(tab => <Tab data-tab-id={`tab-${tab.id}`} key={tab.id}>{tab.title}</Tab>)

  renderTabPanel = tabs => tabs.map(tab => <TabPanel key={tab.id}>{tab.text}</TabPanel>)

  render() {
    const { tabs } = this.props;
    return (
      <TabsWrapper>
        <TabList>
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
