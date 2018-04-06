import React, { Component } from 'react';
import {BannerSlide, Post, PostPaggination, SideBar} from 'components';

export default class HomePage extends Component {
  render(){
    return (
      <div>
          <BannerSlide/>
          <section className="blog-content blog-standard">
              <div className="container">
                  <div className="row">
                      <div className="col-md-9">
                          <div className="content">
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
