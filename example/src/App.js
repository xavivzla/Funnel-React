import React, { Component } from 'react';
import './App.css';

import {Funnel, Bar} from 'funnel-react';

class App extends Component {
  render() {
    return (
      <div>
      <Funnel text='Modern React component module' />
      <Bar />
      </div>
    )
  }
}

export default App;
