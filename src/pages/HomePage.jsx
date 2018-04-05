import React, { Component } from 'react';
import {BannerSlide, Post, PostPaggination, SideBar} from '../components';

export default class HomePage extends Component {
  render(){
    return (
      <div>
          <BannerSlide/>
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
