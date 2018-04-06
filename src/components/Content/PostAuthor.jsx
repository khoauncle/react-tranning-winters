import React, { Component } from 'react';
import blog from 'images/blog/12.jpg';

export default class PostAuthor extends Component {
  render(){
    return (
      <div className="about-author">
          <div className="image-thumb fl">
              <img src={blog} alt=""/>
          </div>
          <div className="author-info">
              <div className="author-name">
                  <h4 className="text-uppercase">Gary Neville</h4>
              </div>
              <div className="author-content">
                  <p>Phasellus facilisis convallis metus, ut imperdiet augue auctor nec. Duis at velit id augue lobortis porta. Sed varius, enim accumsan aliquam tincidunt, tortor urna vulputate quam, eget finibus urna est in augue.</p>
              </div>
              <div className="author-social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-dribbble"></i></a>
                  <a href="#"><i className="fa fa-google-plus"></i></a>
              </div>
          </div>
      </div>
    )
  }
}
