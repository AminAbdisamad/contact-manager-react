import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Ali Hussein',
        company: 'SomaliREN',
        email: 'ali@gmail.com',
        phone: '1522-234-343'
      },
      {
        id: 2,
        name: 'Gedi Abdi',
        company: 'Asal Solutions',
        email: 'gedi@gmail.com',
        phone: '3454-234-343'
      },
      {
        id: 3,
        name: 'Mahad Ali',
        company: 'Asal Solutions',
        email: 'Mahad@gmail.com',
        phone: '3454-234-343'
      },
      {
        id: 4,
        name: 'Mohamed Abdi',
        company: 'SomNOG',
        email: 'Mc@gmail.com',
        phone: '6666-234-343'
      },
      {
        id: 5,
        name: 'Gorad Godax',
        company: 'Loopysec',
        email: 'gorad@gmail.com',
        phone: '0908-234-343'
      }
    ]
  };
  deleteContact = id => {
    const { contacts } = this.state;
    const filteredContact = contacts.filter(contact => {
      return contact.id !== id;
    });
    this.setState({
      contacts: filteredContact
    });
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </div>
    );
  }
}
export default Contacts;
