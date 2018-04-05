import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import img1 from '../../../assets/images/popular-post/1.jpg';
import img2 from '../../../assets/images/popular-post/2.jpg';
import img3 from '../../../assets/images/popular-post/3.jpg';

export default class NavList extends Component {
  render() {
    let navList = {
      height: 'auto'
    };
    return (
      <ul class="navlist">
          <li class="menu-item-has-children current-menu-parent">
              <Link to="/">Home</Link>
              <ul class="sub-menu">
                  <li class="menu-item-has-children">
                      <a href="grid.html">Grid</a>
                      <ul class="sub-menu">
                          <li><a href="grid.html">Fullwidth</a></li>
                          <li><a href="grid-rightsidebar.html">Right sidebar</a></li>
                          <li><a href="grid-leftsidebar.html">Left sidebar</a></li>
                      </ul>
                  </li>
                  <li class="menu-item-has-children">
                      <a href="list.html">List</a>
                      <ul class="sub-menu">
                          <li><a href="list.html">Fullwidth</a></li>
                          <li><a href="list-rightsidebar.html">Right sidebar</a></li>
                          <li><a href="list-leftsidebar.html">Left sidebar</a></li>
                      </ul>
                  </li>
                  <li class="menu-item-has-children">
                      <a href="timeline.html">Timeline</a>
                      <ul class="sub-menu">
                          <li><a href="timeline.html">Fullwidth</a></li>
                          <li><a href="timeline-rightsidebar.html">Right sidebar</a></li>
                          <li><a href="timeline-leftsidebar.html">Left sidebar</a></li>
                      </ul>
                  </li>
                  <li class="menu-item-has-children current-menu-parent">
                      <a href="index-2.html">Standard</a>
                      <ul class="sub-menu">
                          <li><a href="standard.html">Fullwidth</a></li>
                          <li class="current-menu-item"><a href="index-2.html">Right sidebar</a></li>
                          <li><a href="standard-leftsidebar.html">Left sidebar</a></li>
                      </ul>
                  </li>
              </ul>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/category">Category</Link></li>
          <li><Link to="/restaurant">Restaurant</Link></li>
          <li class="megamenu col-5 menu-item-has-children">
              <Link to="/megamenu">Mega menu</Link>
              <ul class="sub-menu">
                  <li>
                      <div class="post">
                          <div class="post-media">
                              <div class="image-wrap">
                                  <img src={img1} alt=""/>
                              </div>
                          </div>
                          <div class="post-body">
                              <div class="post-title">
                                  <h2><a href="single.html">Ut sit amet massa</a></h2>
                              </div>
                              <span class="post-date">March 05, 2015</span>
                          </div>
                      </div>
                  </li>
                  <li>
                      <div class="post">
                          <div class="post-media">
                              <div class="image-wrap">
                                  <img src={img2} alt=""/>
                              </div>
                          </div>
                          <div class="post-body">
                              <div class="post-title">
                                  <h2><a href="single.html">Ut sit amet massa</a></h2>
                              </div>
                              <span class="post-date">March 05, 2015</span>
                          </div>
                      </div>
                  </li>
                  <li>
                      <div class="post">
                          <div class="post-media">
                              <div class="image-wrap">
                                  <img src={img3} alt=""/>
                              </div>
                          </div>
                          <div class="post-body">
                              <div class="post-title">
                                  <h2><a href="single.html">Ut sit amet massa</a></h2>
                              </div>
                              <span class="post-date">March 05, 2015</span>
                          </div>
                      </div>
                  </li>
                  <li>
                      <div class="post">
                          <div class="post-media">
                              <div class="image-wrap">
                                  <img src={img1} alt=""/>
                              </div>
                          </div>
                          <div class="post-body">
                              <div class="post-title">
                                  <h2><a href="single.html">Ut sit amet massa</a></h2>
                              </div>
                              <span class="post-date">March 05, 2015</span>
                          </div>
                      </div>
                  </li>
                  <li>
                      <div class="post">
                          <div class="post-media">
                              <div class="image-wrap">
                                  <img src={img2} alt=""/>
                              </div>
                          </div>
                          <div class="post-body">
                              <div class="post-title">
                                  <h2><a href="single.html">Ut sit amet massa</a></h2>
                              </div>
                              <span class="post-date">March 05, 2015</span>
                          </div>
                      </div>
                  </li>
              </ul>
          </li>
          <li><Link to="/single">Single</Link></li>
          <li><Link to="/contact">Contact</Link></li>
      </ul>
    )
  }
}
