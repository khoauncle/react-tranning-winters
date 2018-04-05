import React, { Component } from 'react';

export default class Post extends Component {
  render(){
    return (
      <section class="blog-heading text-center">
          <div class="container">
              <h1 class="text-uppercase">{this.props.title}</h1>
              <div class="desc">
                  <p>Posts that have media-related tests</p>
              </div>
          </div>
      </section>
    )
  }
}
