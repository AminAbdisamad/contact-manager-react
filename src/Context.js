import React, { Component } from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};
export default class Provider extends Component {
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
