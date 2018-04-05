import React, { Component } from 'react';
import captcha from '../../../assets/images/captcha-demo.png';

export default class ContactArticle extends Component {
  render(){
    return (
      <div class="post">
          <div class="post-meta">
              <div class="post-format">
                  <a href="#"><i class="fa fa-map-marker"></i></a>
              </div>
          </div>
          <div class="contact-info">
              <div class="info-content">
                  <div class="item phone">
                      <i class="fa fa-phone"></i>
                      <span>+0000 987654321</span>
                  </div>
                  <div class="item">
                      <i class="fa fa-map-marker"></i>
                      <span>121 King Street, Melbourne Victoria 3000 Australia</span>
                  </div>
                  <div class="item">
                      <i class="fa fa-envelope"></i>
                      <span><a href="http://xgio.net/cdn-cgi/l/email-protection#72051b1c06170001321b1c141d5c111d1f"><span class="__cf_email__" data-cfemail="e5928c8b91809796a58c8b838acb868a88">[email&#160;protected]</span></a>
                      </span>
                  </div>
              </div>
          </div>
          <div class="post-body">
              <div class="post-entry">
                  <p>Duis mollis eget augue et lobortis. Nam nunc justo, aliquet sed condimentum vel, faucibus in dolor. Proin eleifend hendrerit rhoncus. Maecenas in tellus posuere, placerat metus vehicula, aliquet sapien. Maecenas
                      egestas aliquet nisi efficitur accumsan. Nullam dui eros, porta eu lorem eget, lacinia tempus velit. Vestibulum magna eros, dapibus ac velit ac, accumsan rutrum velit. Sed ultricies aliquet odio, sed tincidunt
                      lacus dapibus non. Donec eget purus in velit ornare molestie. Donec eu semper ipsum. Vivamus vulputate ultricies dolor, sed imperdiet quam mattis eget.</p>
              </div>
              <div class="contact-form">
                  <form action="http://xgio.net/winters/POST">
                      <div class="form-item">
                          <input type="text" value="Your name *"/>
                      </div>
                      <div class="form-item">
                          <input type="text" value="Your email *"/>
                      </div>
                      <div class="form-item">
                          <input type="text" value="Website"/>
                      </div>
                      <div class="form-item form-captcha">
                          <img src={captcha} alt="" class="wpcf7-captchac"/>
                          <span class="wpcf7-form-control-wrap">
                              <input type="text" value="Captcha"/>
                          </span>
                      </div>
                      <div class="form-textarea">
                          <textarea>Message</textarea>
                      </div>
                      <div class="form-actions">
                          <input type="submit" value="Send"/>
                      </div>
                  </form>
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
