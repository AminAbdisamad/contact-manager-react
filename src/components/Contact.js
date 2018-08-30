import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <div className="container push-s9">
          <ul className="collection with-header">
            <li className="collection-header">
              <h5>{name}</h5>
            </li>
            <li className="collection-item">Email: {email}</li>
            <li className="collection-item">Phone: {phone}</li>
            <li />
          </ul>
        </div>
      </div>
    );
  }
}
// Proptypes
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};
export default Contact;
