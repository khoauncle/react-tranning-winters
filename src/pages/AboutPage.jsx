import React, { Component } from 'react';
import {HeadingText} from '../components';
import img1 from '../../assets/images/1.jpg';
import signature from '../../assets/images/signature.png';

export default class AboutPage extends Component {
  render(){
    return (
      <div>
        <HeadingText title="About us"/>
        <section class="blog-content blog-standard">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                        <div class="content">
                            <div class="post">
                                <div class="post-media">
                                    <div class="image-wrap">
                                        <img src={img1} alt=""/>
                                    </div>
                                </div>
                                <div class="post-body">
                                    <div class="post-entry">
                                        <p>Mauris id sapien ante. Praesent vulputate feugiat quam. Duis aliquam nisl non tellus ullamcorper, eget blandit nunc suscipit. Ut placerat urna ac nisl pretium, at gravida purus pulvinar. In pulvinar sit amet dolor
                                            non finibus. Aliquam at arcu egestas quam accumsan luctus. Mauris in sagittis lorem. Cras dapibus varius eros at vestibulum. <br/> Duis mollis eget augue et lobortis. Nam nunc justo, aliquet sed condimentum vel,
                                            faucibus in dolor. Proin eleifend hendrerit rhoncus. Maecenas in tellus posuere, placerat metus vehicula, aliquet sapien. Maecenas egestas aliquet nisi efficitur accumsan. Nullam dui eros, porta eu lorem eget,
                                            lacinia tempus velit.<br/>Integer volutpat velit eget sollicitudin tincidunt. Sed tincidunt ligula libero, eget tincidunt erat volutpat sit amet. In at nisi ac nunc euismod vestibulum. Vestibulum ornare magna
                                            at ligula accumsan volutpat et vel dolor. Cras semper porta cursus. Etiam euismod nisl at ultrices interdum. Proin nec lorem in urna fermentum malesuada quis ut lectus. Nulla et risus nibh.
                                        </p>
                                    </div>
                                    <div class="signature text-right">
                                        <div class="inner">
                                            <img src={signature} alt="Winters Template"/>
                                            <cite class="name">Winters</cite>
                                        </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
  }
}
