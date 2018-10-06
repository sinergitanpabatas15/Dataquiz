import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img
          src="../../assets/coffee-cup.svg"
          alt="Logo"
          className="header--logo"
        />
      </header>
    );
  }
}

export default Header;
