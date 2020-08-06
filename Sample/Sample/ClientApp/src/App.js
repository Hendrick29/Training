import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { AddTutorial } from './Tutorial Components/AddTutorial';

import 'semantic-ui-css/semantic.min.css'
import '../src/components/Styles.css'

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
            <Route exact path='/' component={AddTutorial} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/AddTutorial' component={AddTutorial} />
      </Layout>
    );
  }
}
