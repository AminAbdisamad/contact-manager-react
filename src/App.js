import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header style={{ color: 'blue' }} branding="Contact Manager" />
        <Contact name="Hassan" email="hassan@gmail.com" phone="252-1-3423234" />
        <Contact name="Geedi" email="geedi@gmail.com" phone="252-1-4565778" />
      </div>
    );
  }
}

export default App;