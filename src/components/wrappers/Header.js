// Header.js
// ***********************************************************
// ***** client side - src/components/wrapper/Header.js  *****
// ***** This is the Header for the App                  *****
// ***********************************************************

// node modules
import React from 'react';
import Logo from '../../assets/images/jhdEnterprisesLlcLogo.png';

const Header = () => {
  
  return (
    <div className='header'>
      <img src={Logo} alt="logo" className='logo' />
      <p className='tag-line'>A network of companies supporting a secure future for individuals and businesses</p>
    </div>
  )
}

export default Header;