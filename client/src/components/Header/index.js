import React from 'react';
import './index.css';

function Header() {
  return (
    <div className="Heading">
      <div id='logo'>
        <img src={require('./images/logo-endless.svg')} alt='Endless Logo' />
      </div>
    </div>
  );
}

export default Header;