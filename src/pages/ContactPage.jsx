import React, { Component } from 'react';
import {HeadingText, ContactArticle, RelatedPost, SideBar} from '../components';

export default class ContactPage extends Component {
  render(){
    return (
      <div>
          <HeadingText title="Contact Us"/>
          <section className="blog-content blog-standard">
              <div className="container">
                  <div className="row">
                      <div className="col-md-9">
                          <div className="content">
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
