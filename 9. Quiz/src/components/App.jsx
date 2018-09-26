import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import '../../css/main.sass';
import Quiz from './Quiz';

class App extends Component {
  render() {
    return <Quiz />;
  }
}

export default hot(module)(App);
