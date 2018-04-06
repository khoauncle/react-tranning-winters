import React, { Component } from 'react';
import post1 from 'images/popular-post/1.jpg';
import post2 from 'images/popular-post/2.jpg';
import post3 from 'images/popular-post/3.jpg';

export default class RelatedPost extends Component {
  render(){
    return (
      <div className="related-post">
          <h4>Related posts</h4>
          <div className="row">
              <div className="col-md-4">
                  <div className="related-post-item">
                      <div className="post-media">
                          <div className="image-wrap">
                              <img src={post1} alt=""/>
                          </div>
                      </div>
                      <div className="post-body">
                          <div className="post-title">
                              <h2><a href="blog-single.html">Ut sit amet massa</a></h2>
                          </div>
                          <span className="post-date">March 05, 2015</span>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="related-post-item">
                      <div className="post-media">
                          <div className="image-wrap">
                              <img src={post2} alt=""/>
                          </div>
                      </div>
                      <div className="post-body">
                          <div className="post-title">
                              <h2><a href="blog-single.html">Ut sit amet massa</a></h2>
                          </div>
                          <span className="post-date">March 05, 2015</span>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="related-post-item">
                      <div className="post-media">
                          <div className="image-wrap">
                              <img src={post3} alt=""/>
                          </div>
                      </div>
                      <div className="post-body">
                          <div className="post-title">
                              <h2><a href="blog-single.html">Ut sit amet massa</a></h2>
                          </div>
                          <span className="post-date">March 05, 2015</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
