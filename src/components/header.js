import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Link to="/">
      <div className="header all-center">
        <h3>InFamily</h3>
      </div>
    </Link>
  )
}

export default Header;