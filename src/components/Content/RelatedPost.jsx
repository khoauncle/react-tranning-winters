import React, { Component } from 'react';
import post1 from '../../../assets/images/popular-post/1.jpg';
import post2 from '../../../assets/images/popular-post/2.jpg';
import post3 from '../../../assets/images/popular-post/3.jpg';

export default class RelatedPost extends Component {
  render(){
    return (
      <div class="related-post">
          <h4>Related posts</h4>
          <div class="row">
              <div class="col-md-4">
                  <div class="related-post-item">
                      <div class="post-media">
                          <div class="image-wrap">
                              <img src={post1} alt=""/>
                          </div>
                      </div>
                      <div class="post-body">
                          <div class="post-title">
                              <h2><a href="blog-single.html">Ut sit amet massa</a></h2>
                          </div>
                          <span class="post-date">March 05, 2015</span>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="related-post-item">
                      <div class="post-media">
                          <div class="image-wrap">
                              <img src={post2} alt=""/>
                          </div>
                      </div>
                      <div class="post-body">
                          <div class="post-title">
                              <h2><a href="blog-single.html">Ut sit amet massa</a></h2>
                          </div>
                          <span class="post-date">March 05, 2015</span>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="related-post-item">
                      <div class="post-media">
                          <div class="image-wrap">
                              <img src={post3} alt=""/>
                          </div>
                      </div>
                      <div class="post-body">
                          <div class="post-title">
                              <h2><a href="blog-single.html">Ut sit amet massa</a></h2>
                          </div>
                          <span class="post-date">March 05, 2015</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
