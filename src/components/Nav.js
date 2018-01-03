import { BrowserRouter as Routers, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class Nav extends React.Component {
  render() {    
    return (
      <nav className="Nav">
        <div className="Nav__container">
          <Link to="/" className="Nav__brand">
            <img src="/css/logo.svg" className="Nav__logo" />
          </Link>

          <div className="Nav__right">
            <ul className="Nav__item-wrapper">
              <li className="Nav__item">
                <Link className="Nav__link" to="/">Home</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/Login">Login</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/Register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

