import React, { Component } from 'react';
import {HeadingText, Post, PostPaggination, SideBar} from '../components';

export default class CategoryPage extends Component {
  render(){
    return (
      <div>
          <HeadingText title="Category"/>
          <section class="blog-content blog-standard">
              <div class="container">
                  <div class="row">
                      <div class="col-md-9">
                          <div class="content">
                              <Post typePost="video"/>
                              <Post typePost="audio"/>
                              <Post typePost="image"/>
                              <PostPaggination/>
                          </div>
                      </div>
                      <SideBar/>
                  </div>
              </div>
          </section>
      </div>
    )
  }
}
