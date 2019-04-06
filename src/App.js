import React, { Component } from 'react';
import {Provider} from 'unstated';

import PwdHeader from './components/PwdHeader.js'

class App extends Component {
  render() {
    return (
        <Provider>
      <div className="App">
        <header className="App-header">
            <PwdHeader/>
        </header>
      </div>
        </Provider>
    );
  }
}

export default App;
