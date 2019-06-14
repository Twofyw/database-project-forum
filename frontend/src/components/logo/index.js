import React from 'react';
import logo from './logo.png';
import './styles.css';

const Logo = () => {
  return (
    <div className="logoContainer">
      <img src={logo} className="logo" alt="logo" />
      <div className="logoTitle">社区花园</div>
    </div>
  );
};

export default Logo;
