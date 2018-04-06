import React, { Component } from 'react';
import blog from 'images/blog/25.jpg';
import author from 'images/author/1.jpg';
import PostMedia from './PostMedia';

export default class Post extends Component {
  render(){
    return (
      <div className="post">
          <PostMedia typePost={this.props.typePost}/>
          <div className="post-meta">
              <div className="post-format">
                  <a href="#"><i className="fa fa-image"></i></a>
              </div>
              <div className="post-date">
                  <span className="year">2015</span>
                  <span className="month">Mar</span>
                  <span className="day">14</span>
              </div>
              <div className="post-comment">
                  <i className="fa fa-comment"></i>
                  <a href="#">105</a>
              </div>
          </div>
          <div className="post-body">
              <div className="post-author">
                  <div className="image-thumb">
                      <img src={author} alt=""/>
                  </div>
                  <div className="name-author">
                      <cite>Barbara Walters</cite>
                  </div>
              </div>
              <div className="post-title">
                  <h2><a href="single.html">Nam commodo turpis sit amet magna</a></h2>
              </div>
              <div className="post-entry">
                  <p>Mauris id sapien ante. Praesent vulputate feugiat quam. Duis aliquam nisl non tellus ullamcorper, eget blandit nunc suscipit. Ut placerat urna ac nisl pretium, at gravida purus pulvinar. In pulvinar sit amet dolor
                      non finibus. Aliquam at arcu egestas quam accumsan luctus. Mauris in sagittis lorem. Cras dapibus varius eros at vestibulum.</p>
              </div>
              <div className="post-link">
                  <a href="single.html" className="pi-btn">Read more</a>
              </div>
              <div className="post-share">
                  <span className="share-toggle pi-btn">
                      <i className="fa fa-share-alt"></i>
                  </span>
                  <div className="share">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-dribbble"></i></a>
                      <a href="#"><i className="fa fa-instagram"></i></a>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
