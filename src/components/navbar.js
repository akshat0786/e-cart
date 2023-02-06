import React from 'react'
// import { Component } from 'react';

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            E-cart
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
