import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({
  text = 'Feedback UI',
  bgColor = 'rgba(0,0,0,.4)',
  textColor = '#ff6a95',
}) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <Link to="/">
          <h3>{text}</h3>
        </Link>
      </div>
    </header>
  );
};

export default Header;
