import React, { Component } from 'react';
import {PostDetail, PostAuthor, RelatedPost, CommentList, CommentBox, SideBar} from '../components';

export default class SinglePage extends Component {
  render(){
    return (
      <section class="blog-content blog-standard">
          <div class="container">
              <div class="row">
                  <div class="col-md-9">
                      <div class="content">
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
