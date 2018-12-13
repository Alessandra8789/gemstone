import React, { Component } from 'react';
import './index.css';
import Description from './description';
import Reviews from './reviews';
import Specs from './specs';
import {Tab, TabList, Tabs, TabPanel} from 'react-tabs';

class PanelTabs extends Component {
  handelClick = event => {
    event.preventDefault();
  }


  render() {

    return (
      <div className="PanelTabs">
        <Tabs defaultIndex={0} selectedTabClassName="active">
          <TabList>
          <ul className="nav nav-tabs">
            <Tab className="nav-item">
              <a onClick={this.handelClick} className="nav-link" href="/">Description</a>
            </Tab>
            <Tab className="nav-item">
              <a onClick={this.handelClick} className="nav-link" href="/">Reviews</a>
            </Tab>
            <Tab className="nav-item">
              <a onClick={this.handelClick} className="nav-link" href="/">Specs</a>
            </Tab>
          </ul>
          </TabList>
          <TabPanel><Description description={this.props.info.description }/></TabPanel>
          <TabPanel><Reviews reviews={this.props.info.reviews} /></TabPanel>
          <TabPanel><Specs /></TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default PanelTabs;
