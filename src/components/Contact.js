import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showState: false
  };
  // expends the LI when you clicked
  expendOnClick = () => {
    this.setState({ showState: !this.state.showState });
  };
  // Delete props for the delete icon
  deleteIteam = () => {
    this.props.deleteClickHandler();
  };
  render() {
    const { name, email, phone, company } = this.props.contact;
    const { showState } = this.state;
    return (
      <div>
        <div className="container push-s9">
          <ul className="collection with-header">
            <li className="collection-header">
              <h6 className="blue-text">
                {name}
                {/* Delete Icon */}
                <i
                  onClick={this.deleteIteam}
                  className="material-icons secondary-content right red-text small"
                  style={{ cursor: 'pointer' }}
                >
                  delete
                </i>
                {/* Edit Icon */}
                <i
                  className="material-icons secondary-content right green-text"
                  style={{ cursor: 'pointer' }}
                >
                  edit
                </i>
                {/* Expend Icon */}
                <i
                  onClick={this.expendOnClick}
                  className="material-icons  right blue-text"
                  style={{ cursor: 'pointer' }}
                >
                  expand_more
                </i>
              </h6>
            </li>
            {showState ? (
              <ul>
                <li className="collection-item">Email: {email}</li>
                <li className="collection-item">Company: {company}</li>
                <li className="collection-item">Phone: {phone}</li>
              </ul>
            ) : null}
          </ul>
        </div>
      </div>
    );
  }
}
// Proptypes
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  // email: PropTypes.string.isRequired,
  // phone: PropTypes.string.isRequired
  deleteClickHandler: PropTypes.func.isRequired
};
export default Contact;
