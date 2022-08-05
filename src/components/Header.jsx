import React from 'react';
import PropTypes from 'prop-types';

function Header({ text }) {
  return (
    <div>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </div>
  );
}
Header.defaultProps = {
  text: 'Feedback UI',
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
