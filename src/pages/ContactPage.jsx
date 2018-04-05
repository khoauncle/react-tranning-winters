import React, { Component } from 'react';
import {HeadingText, ContactArticle, RelatedPost, SideBar} from '../components';

export default class ContactPage extends Component {
  render(){
    return (
      <div>
          <HeadingText title="Contact Us"/>
          <section class="blog-content blog-standard">
              <div class="container">
                  <div class="row">
                      <div class="col-md-9">
                          <div class="content">
                              <ContactArticle/>
                              <RelatedPost/>
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
