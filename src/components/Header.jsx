import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Header({ text }) {
  const headerStyle = {
    backgroundColor: 'blue',
    color: 'red',
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
        <div className="right">
          <NavLink to="/" activeClassName="active">
            {' '}
            Home{' '}
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            {' '}
            About
          </NavLink>
        </div>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: 'Feedback UI',
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
