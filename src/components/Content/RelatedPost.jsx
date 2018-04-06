import React, { Component } from 'react';
import { relatedPostData } from 'dumbData';

const getPost = (post) => {
  return(
    <div className="col-md-4">
        <div className="related-post-item">
            <div className="post-media">
                <div className="image-wrap">
                    <img src={post.src} alt=""/>
                </div>
            </div>
            <div className="post-body">
                <div className="post-title">
                    <h2><a href="blog-single.html">{post.title}</a></h2>
                </div>
                <span className="post-date">{post.date}</span>
            </div>
        </div>
    </div>
  )
}

const relatedPost = relatedPostData.map((post) => {
  return(
    getPost(post)
  )
})

export default class RelatedPost extends Component {
  render(){
    return (
      <div className="related-post">
          <h4>Related posts</h4>
          <div className="row">
            {relatedPost}
          </div>
      </div>
    )
  }
}
