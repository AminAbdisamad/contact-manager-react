import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact
          name="Hassan Mohamed"
          email="hassan@gmail.com"
          phone="252-1-3423234"
        />
        <Contact
          name="Geedi Gorad"
          email="geedi@gmail.com"
          phone="252-1-4565778"
        />
      </div>
    );
  }
}

export default App;
