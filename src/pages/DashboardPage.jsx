import React, {Component} from 'react';
import { Route,Switch } from 'react-router-dom';
import {Header, Footer, BannerSlide} from 'components';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CategoryPage from './CategoryPage';
import ContactPage from './ContactPage';
import SinglePage from './SinglePage';

export default class DashboardPage extends Component {
  render() {
    return (
      <body>
        <div id="page-wrap">
            <Header/>
              <div id="preloader">
                  <div className="tb-cell">
                      <div className="page-loading">
                          <div className="item-icon"></div>
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
