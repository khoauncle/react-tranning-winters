import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShareBox from './ShareBox.jsx';
import SearchBox from './SearchBox.jsx';
import NavList from './NavList.jsx';
import logo from '../../../assets/images/logo.png';

export default class Header extends Component {
  render(){
    return (
      <header id="header" class="header">
          <div class="container">
              <div class="logo text-center">
                  <Link to="/"><img src={logo} alt=""/></Link>
              </div>
          </div>
          <nav class="pi-navigation" data-menu-responsive="1200">
              <div class="container">
                  <div class="open-menu">
                      <span class="item item-1"></span>
                      <span class="item item-2"></span>
                      <span class="item item-3"></span>
                  </div>
                  <div class="close-menu"></div>
                  <NavList/>
                  <SearchBox/>
                  <ShareBox/>
              </div>
          </nav>
      </header>
    )
  }
}
