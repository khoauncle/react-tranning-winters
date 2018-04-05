import React, { Component } from 'react';
import img1 from '../../../assets/images/feature/1.jpg';
import img2 from '../../../assets/images/feature/2.jpg';
import img3 from '../../../assets/images/feature/3.jpg';

export default class BannerSlide extends Component {
  render(){
    return (
        <section class="featured">
          <div class="featured-slider">
              <div class="post">
                  <div class="post-media">
                      <div class="image-wrap">
                          <img src={img1} alt=""/>
                      </div>
                  </div>
                  <div class="post-body">
                      <span class="cat"><a href="#">Lifestyle</a></span>
                      <div class="post-title">
                          <h4>
                              <a href="#">There are many variations</a>
                          </h4>
                      </div>
                      <div class="post-meta">
                          <span class="post-date">March 8, 2015</span>
                      </div>
                  </div>
              </div>
              <div class="post">
                  <div class="post-media">
                      <div class="image-wrap">
                          <img src={img2} alt=""/>
                      </div>
                  </div>
                  <div class="post-body">
                      <span class="cat"><a href="#">Lifestyle</a></span>
                      <div class="post-title">
                          <h4>
                              <a href="#">There are many variations</a>
                          </h4>
                      </div>
                      <div class="post-meta">
                          <span class="post-date">March 8, 2015</span>
                      </div>
                  </div>
              </div>
              <div class="post">
                  <div class="post-media">
                      <div class="image-wrap">
                          <img src={img3} alt=""/>
                      </div>
                  </div>
                  <div class="post-body">
                      <span class="cat"><a href="#">Lifestyle</a></span>
                      <div class="post-title">
                          <h4>
                              <a href="#">There are many variations</a>
                          </h4>
                      </div>
                      <div class="post-meta">
                          <span class="post-date">March 8, 2015</span>
                      </div>
                  </div>
              </div>
              <div class="post">
                  <div class="post-media">
                      <div class="image-wrap">
                          <img src={img1} alt=""/>
                      </div>
                  </div>
                  <div class="post-body">
                      <span class="cat"><a href="#">Lifestyle</a></span>
                      <div class="post-title">
                          <h4>
                              <a href="#">There are many variations</a>
                          </h4>
                      </div>
                      <div class="post-meta">
                          <span class="post-date">March 8, 2015</span>
                      </div>
                  </div>
              </div>
              <div class="post">
                  <div class="post-media">
                      <div class="image-wrap">
                          <img src={img2} alt=""/>
                      </div>
                  </div>
                  <div class="post-body">
                      <span class="cat"><a href="#">Lifestyle</a></span>
                      <div class="post-title">
                          <h4>
                              <a href="#">There are many variations</a>
                          </h4>
                      </div>
                      <div class="post-meta">
                          <span class="post-date">March 8, 2015</span>
                      </div>
                  </div>
              </div>
              <div class="post">
                  <div class="post-media">
                      <div class="image-wrap">
                          <img src={img3} alt=""/>
                      </div>
                  </div>
                  <div class="post-body">
                      <span class="cat"><a href="#">Lifestyle</a></span>
                      <div class="post-title">
                          <h4>
                              <a href="#">There are many variations</a>
                          </h4>
                      </div>
                      <div class="post-meta">
                          <span class="post-date">March 8, 2015</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}
