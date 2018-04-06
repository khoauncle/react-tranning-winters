import React, {Component} from 'react';
import { bannerSlideData } from 'dumbData';

const postThumb = (postData) => {
  let post =
  <div className="post">
    <div className="post-media">
      <div className="image-wrap">
        <img src={postData.src} alt=""/>
      </div>
    </div>
    <div className="post-body">
      <span className="cat">
        <a href="#">{postData.category}</a>
      </span>
      <div className="post-title">
        <h4>
          <a href="#">{postData.title}</a>
        </h4>
      </div>
      <div className="post-meta">
        <span className="post-date">{postData.title}</span>
      </div>
    </div>
  </div>;
  return post;
}

const getSlide = bannerSlideData.map( (post) => {
  return(
      postThumb(post)
    )
  })

export default class BannerSlide extends Component {

  render() {
    return (
      <section className="featured">
        <div className="featured-slider">
          {getSlide}
        </div>
      </section>
    )
  }
}
