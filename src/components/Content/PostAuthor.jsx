import React, { Component } from 'react';
import blog from '../../../assets/images/blog/12.jpg';

export default class PostAuthor extends Component {
  render(){
    return (
      <div class="about-author">
          <div class="image-thumb fl">
              <img src={blog} alt=""/>
          </div>
          <div class="author-info">
              <div class="author-name">
                  <h4 class="text-uppercase">Gary Neville</h4>
              </div>
              <div class="author-content">
                  <p>Phasellus facilisis convallis metus, ut imperdiet augue auctor nec. Duis at velit id augue lobortis porta. Sed varius, enim accumsan aliquam tincidunt, tortor urna vulputate quam, eget finibus urna est in augue.</p>
              </div>
              <div class="author-social">
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                  <a href="#"><i class="fa fa-google-plus"></i></a>
              </div>
          </div>
      </div>
    )
  }
}
