import React, { Component } from 'react';
import blog from '../../../assets/images/blog/25.jpg';
import author from '../../../assets/images/author/1.jpg';
import PostMedia from './PostMedia.jsx';

export default class Post extends Component {
  render(){
    return (
      <div class="post">
          <PostMedia typePost={this.props.typePost}/>
          <div class="post-meta">
              <div class="post-format">
                  <a href="#"><i class="fa fa-image"></i></a>
              </div>
              <div class="post-date">
                  <span class="year">2015</span>
                  <span class="month">Mar</span>
                  <span class="day">14</span>
              </div>
              <div class="post-comment">
                  <i class="fa fa-comment"></i>
                  <a href="#">105</a>
              </div>
          </div>
          <div class="post-body">
              <div class="post-author">
                  <div class="image-thumb">
                      <img src={author} alt=""/>
                  </div>
                  <div class="name-author">
                      <cite>Barbara Walters</cite>
                  </div>
              </div>
              <div class="post-title">
                  <h2><a href="single.html">Nam commodo turpis sit amet magna</a></h2>
              </div>
              <div class="post-entry">
                  <p>Mauris id sapien ante. Praesent vulputate feugiat quam. Duis aliquam nisl non tellus ullamcorper, eget blandit nunc suscipit. Ut placerat urna ac nisl pretium, at gravida purus pulvinar. In pulvinar sit amet dolor
                      non finibus. Aliquam at arcu egestas quam accumsan luctus. Mauris in sagittis lorem. Cras dapibus varius eros at vestibulum.</p>
              </div>
              <div class="post-link">
                  <a href="single.html" class="pi-btn">Read more</a>
              </div>
              <div class="post-share">
                  <span class="share-toggle pi-btn">
                      <i class="fa fa-share-alt"></i>
                  </span>
                  <div class="share">
                      <a href="#"><i class="fa fa-facebook"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-dribbble"></i></a>
                      <a href="#"><i class="fa fa-instagram"></i></a>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
