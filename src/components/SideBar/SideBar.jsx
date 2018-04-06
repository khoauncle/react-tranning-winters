import React, { Component } from 'react';
import img1 from 'images/2.jpg';
import imgLatest1 from 'images/latest/1.jpg';
import imgLatest2 from 'images/latest/2.jpg';
import imgLatest3 from 'images/latest/3.jpg';
import imgFlickr1 from 'images/flickr/1.jpg';
import imgFlickr2 from 'images/flickr/2.jpg';
import imgFlickr3 from 'images/flickr/3.jpg';
import imgFlickr4 from 'images/flickr/4.jpg';
import imgFlickr5 from 'images/flickr/5.jpg';
import imgFlickr6 from 'images/flickr/6.jpg';
import imgFlickr7 from 'images/flickr/7.jpg';
import imgFlickr8 from 'images/flickr/8.jpg';
import imgFlickr9 from 'images/flickr/9.jpg';

export default class SideBar extends Component {
  render(){
    return (
      <div className="col-md-3">
          <div className="sidebar sidebar-right">
              <div className="widget widget_about">
                  <h4>About me</h4>
                  <div className="author-thumb">
                      <img src={img1} alt=""/>
                  </div>
                  <h3 className="author-name text-uppercase"><a href="#">Steven Typer</a></h3>
                  <div className="desc">
                      <p>Cras imperdiet in sem sed sodales. Nunc urna lectus, elementum id rhoncus ac, accumsan sed sapien.</p>
                  </div>
                  <div className="about-social">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-google-plus"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-tumblr"></i></a>
                  </div>
              </div>
              <div className="widget widget_latest_post">
                  <h4>Latest post</h4>
                  <ul>
                      <li>
                          <div className="image-wrap">
                              <img src={imgLatest1} alt=""/>
                          </div>
                          <div className="content-text">
                              <a href="#">Suspendisse lobortis mollis arcu quis</a>
                              <span className="date">Jan 10, 2014</span>
                          </div>
                      </li>
                      <li>
                          <div className="image-wrap">
                              <img src={imgLatest2} alt=""/>
                          </div>
                          <div className="content-text">
                              <a href="#">Suspendisse lobortis mollis arcu quis</a>
                              <span className="date">Jan 10, 2014</span>
                          </div>
                      </li>
                      <li>
                          <div className="image-wrap">
                              <img src={imgLatest3} alt=""/>
                          </div>
                          <div className="content-text">
                              <a href="#">Suspendisse lobortis mollis arcu quis</a>
                              <span className="date">Jan 10, 2014</span>
                          </div>
                      </li>
                  </ul>
              </div>
              <div className="widget widget_categories">
                  <h4>Categories</h4>
                  <ul>
                      <li><a href="#">Music</a></li>
                      <li><a href="#">Travel</a></li>
                      <li><a href="#">Restaurant</a></li>
                      <li><a href="#">Lifestyle</a></li>
                  </ul>
              </div>
              <div className="widget widget_flickr">
                  <h4>Flickr</h4>
                  <ul className="flickr">
                      <li><a href="#"><img src={imgFlickr1} alt=""/></a></li>
                      <li><a href="#"><img src={imgFlickr2} alt=""/></a></li>
                      <li><a href="#"><img src={imgFlickr3} alt=""/></a></li>
                      <li><a href="#"><img src={imgFlickr4} alt=""/></a></li>
                      <li><a href="#"><img src={imgFlickr5} alt=""/></a></li>
                      <li><a href="#"><img src={imgFlickr6} alt=""/></a></li>
                      <li><a href="#"><img src={imgFlickr7} alt=""/></a></li>
                      <li><a href="#"><img src={imgFlickr8} alt=""/></a></li>
                      <li><a href="#"><img src={imgFlickr9} alt=""/></a></li>
                  </ul>
              </div>
              <div className="widget widget_calendar">
                  <div id="calendar_wrap">
                      <table id="wp-calendar">
                          <caption>March 2015</caption>
                          <thead>
                              <tr>
                                  <th scope="col" title="Monday">M</th>
                                  <th scope="col" title="Tuesday">T</th>
                                  <th scope="col" title="Wednesday">W</th>
                                  <th scope="col" title="Thursday">T</th>
                                  <th scope="col" title="Friday">F</th>
                                  <th scope="col" title="Saturday">S</th>
                                  <th scope="col" title="Sunday">S</th>
                              </tr>
                          </thead>
                          <tfoot>
                              <tr>
                                  <td colspan="3" id="prev"><a href="#">« Jan</a></td>
                                  <td className="pad">&nbsp;</td>
                                  <td colspan="3" id="next" className="pad">&nbsp;</td>
                              </tr>
                          </tfoot>
                          <tbody>
                              <tr>
                                  <td colspan="6" className="pad">&nbsp;</td>
                                  <td>1</td>
                              </tr>
                              <tr>
                                  <td>2</td>
                                  <td>3</td>
                                  <td>4</td>
                                  <td>5</td>
                                  <td>6</td>
                                  <td>7</td>
                                  <td>8</td>
                              </tr>
                              <tr>
                                  <td>9</td>
                                  <td>10</td>
                                  <td>11</td>
                                  <td>12</td>
                                  <td>13</td>
                                  <td id="today">14</td>
                                  <td>15</td>
                              </tr>
                              <tr>
                                  <td>16</td>
                                  <td>17</td>
                                  <td>18</td>
                                  <td>19</td>
                                  <td>20</td>
                                  <td>21</td>
                                  <td>22</td>
                              </tr>
                              <tr>
                                  <td>23</td>
                                  <td>24</td>
                                  <td>25</td>
                                  <td>26</td>
                                  <td>27</td>
                                  <td>28</td>
                                  <td>29</td>
                              </tr>
                              <tr>
                                  <td>30</td>
                                  <td>31</td>
                                  <td className="pad" colspan="5">&nbsp;</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
              <div className="widget widget_tag_cloud">
                  <h4>Tag cloud</h4>
                  <div className="tagcloud">
                      <a href="#">Recipe</a>
                      <a href="#">Chicken</a>
                      <a href="#">Wordpress</a>
                      <a href="#">Photoshop</a>
                      <a href="#">JQuery</a>
                      <a href="#">Chicken</a>
                      <a href="#">Wordpress</a>
                      <a href="#">Photoshop</a>
                      <a href="#">JQuery</a>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
