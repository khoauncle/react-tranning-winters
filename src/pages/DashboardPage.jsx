import React, {Component} from 'react';
import { Route,Switch } from 'react-router-dom';
import {Header, Footer, BannerSlide} from '../components';
import HomePage from './HomePage.jsx';
import AboutPage from './AboutPage.jsx';
import CategoryPage from './CategoryPage.jsx';
import ContactPage from './ContactPage.jsx';
import SinglePage from './SinglePage.jsx';

export default class DashboardPage extends Component {
  render() {
    return (
      <body>
        <div id="page-wrap">
            <Header/>
              <div id="preloader">
                  <div class="tb-cell">
                      <div class="page-loading">
                          <div class="item-icon"></div>
                      </div>
                  </div>
              </div>
              <div className="switch-content">
                <Switch>
                  <Route exact path="/" component={HomePage}/>
                  <Route path="/about" component={AboutPage}/>
                  <Route path="/category" component={CategoryPage}/>
                  <Route path="/restaurant" component={CategoryPage}/>
                  <Route path="/contact" component={ContactPage}/>
                  <Route path="/single" component={SinglePage}/>
                  <Route path="/megamenu" component={CategoryPage}/>
                </Switch>
              </div>
            <Footer/>
        </div>
      </body>
    )
  }
}
