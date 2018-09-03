import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contacts />
      </div>
    );
  }
}

export default App;
