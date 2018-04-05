import React, { Component } from 'react';
import blog from '../../../assets/images/blog/25.jpg';

export default class PostMedia extends Component {
  render(){
    var element = null;
    if(this.props.typePost==='image')
    {
      element =
      <div class="image-wrap">
          <img src={blog} alt=""/>
      </div>;
    } else if (this.props.typePost==='video') {
      element =
      <div class="video embed-responsive embed-responsive-16by9">
          <iframe src="https://player.vimeo.com/video/117934677?color=ea6a47&amp;title=0&amp;byline=0&amp;portrait=0" width="500" height="281"></iframe>
      </div>;
    } else {
      element =
      <div class="video embed-responsive embed-responsive-16by9">
          <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/138940301&amp;auto_play=false&amp;hide_related=false&amp;visual=true"></iframe>
      </div>;
    }
    return (
      <div class="post-media">
          {element}
          <div class="post-cat">
              <a href="#">{this.props.typePost}</a>
          </div>
      </div>
    )
  }
}
