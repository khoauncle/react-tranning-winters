import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShareBox from './ShareBox';
import SearchBox from './SearchBox';
import NavList from './NavList';
import logo from 'images/logo.png';

export default class Header extends Component {
  render(){
    return (
      <header id="header" className="header">
          <div className="container">
              <div className="logo text-center">
                  <Link to="/"><img src={logo} alt=""/></Link>
              </div>
          </div>
          <nav className="pi-navigation" data-menu-responsive="1200">
              <div className="container">
                  <div className="open-menu">
                      <span className="item item-1"></span>
                      <span className="item item-2"></span>
                      <span className="item item-3"></span>
                  </div>
                  <div className="close-menu"></div>
                  <NavList/>
                  <SearchBox/>
                  <ShareBox/>
              </div>
          </nav>
      </header>
    )
  }
}
