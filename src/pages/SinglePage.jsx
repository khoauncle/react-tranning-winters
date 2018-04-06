import React, { Component } from 'react';
import {PostDetail, PostAuthor, RelatedPost, CommentList, CommentBox, SideBar} from 'components';

export default class SinglePage extends Component {
  render(){
    return (
      <section className="blog-content blog-standard">
          <div className="container">
              <div className="row">
                  <div className="col-md-9">
                      <div className="content">
                          <PostDetail/>
                          <PostAuthor/>
                          <RelatedPost/>
                          <CommentList/>
                          <CommentBox/>
                      </div>
                  </div>
                  <SideBar/>
              </div>
          </div>
      </section>
    )
  }
}
