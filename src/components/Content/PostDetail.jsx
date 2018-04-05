import React, { Component } from 'react';
import blog1 from '../../../assets/images/blog/1.jpg';
import blog2 from '../../../assets/images/blog/grid/2.jpg';

export default class PostDetail extends Component {
  render(){
    return (
      <div class="post">
          <div class="post-media">
              <div class="image-wrap">
                  <img src={blog1} alt=""/>
              </div>
              <div class="post-cat">
                  <a href="#">Travel</a>
              </div>
          </div>
          <div class="post-meta">
              <div class="post-format">
                  <a href="#"><i class="fa fa-image"></i></a>
              </div>
              <div class="post-date">
                  <span class="year">2015</span>
                  <span class="month">Mar</span>
                  <span class="day">14</span>
              </div>
              <div class="post-comment">
                  <i class="fa fa-comment"></i>
                  <a href="#">105</a>
              </div>
          </div>
          <div class="post-body">
              <div class="post-title">
                  <h1>Nam commodo turpis sit amet magna</h1>
              </div>
              <div class="post-entry">
                  <p>Mauris id sapien ante. Praesent vulputate feugiat quam. Duis aliquam nisl non tellus ullamcorper, eget blandit nunc suscipit. Ut placerat urna ac nisl pretium, at gravida purus pulvinar. In pulvinar sit amet dolor
                      non finibus. Aliquam at arcu egestas quam accumsan luctus. Mauris in sagittis lorem. Cras dapibus varius eros at vestibulum. <br/>
                      <blockquote>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit turpis a lacus euismod dictum. Aliquam erat volutpat. Pellentesque euismod, quam nec tincidunt euismod, velit nisl porttitor massa,
                              sed consectetur risus neque placerat dui.</p>
                          <cite>John smith</cite>
                      </blockquote>
                      <div class="wp-caption alignleft">
                          <img src={blog2} alt=""/>
                          <div class="wp-caption-text">Phasellus maximus ipsum sed turpis faucibus</div>
                      </div>
                      Duis mollis eget augue et lobortis. Nam nunc justo, aliquet sed condimentum vel, faucibus in dolor. Proin eleifend hendrerit rhoncus. Maecenas in tellus posuere, placerat metus vehicula, aliquet sapien. Maecenas egestas aliquet nisi efficitur accumsan.
                      Nullam dui eros, porta eu lorem eget, lacinia tempus velit. Vestibulum magna eros, dapibus ac velit ac, accumsan rutrum velit. Sed ultricies aliquet odio, sed tincidunt lacus dapibus non. Donec eget purus in
                      velit ornare molestie. Donec eu semper ipsum. Vivamus vulputate ultricies dolor, sed imperdiet quam mattis eget. <br/><br/>Integer volutpat velit eget sollicitudin tincidunt.
                      Sed tincidunt ligula libero, eget tincidunt erat volutpat sit amet. In at nisi ac nunc euismod vestibulum. Vestibulum ornare magna at ligula accumsan volutpat et vel dolor. Cras semper porta cursus. Etiam euismod
                      nisl at ultrices interdum. Proin nec lorem in urna fermentum malesuada quis ut lectus. Nulla et risus nibh.</p>
              </div>
              <div class="post-share">
                  <span class="share-toggle pi-btn">
                      <i class="fa fa-share-alt"></i>
                  </span>
                  <div class="share">
                      <a href="#"><i class="fa fa-facebook"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-dribbble"></i></a>
                      <a href="#"><i class="fa fa-instagram"></i></a>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
