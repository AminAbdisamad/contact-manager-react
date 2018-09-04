import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <nav>
      <div className="nav-wrapper indigo darken-1">
        <div className="container">
          <a href="/" className="brand-logo">
            Contact Manager
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Add">Add</a>
            </li>
            <li>
              <a href="/contacts">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
Header.defaultProps = {
  branding: 'Contact Manager App'
};
Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
