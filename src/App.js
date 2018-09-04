import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import 'materialize-css/dist/css/materialize.min.css';
import Provider from './Context';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <Contacts />
        </div>
      </Provider>
    );
  }
}

export default App;
