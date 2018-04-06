import React, { Component } from 'react';

export default class Post extends Component {
  render(){
    return (
      <section className="blog-heading text-center">
          <div className="container">
              <h1 className="text-uppercase">{this.props.title}</h1>
              <div className="desc">
                  <p>Posts that have media-related tests</p>
              </div>
          </div>
      </section>
    )
  }
}
