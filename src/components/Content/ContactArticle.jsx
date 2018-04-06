import React, { Component } from 'react';
import captcha from 'images/captcha-demo.png';

export default class ContactArticle extends Component {
  render(){
    return (
      <div className="post">
          <div className="post-meta">
              <div className="post-format">
                  <a href="#"><i className="fa fa-map-marker"></i></a>
              </div>
          </div>
          <div className="contact-info">
              <div className="info-content">
                  <div className="item phone">
                      <i className="fa fa-phone"></i>
                      <span>+0000 987654321</span>
                  </div>
                  <div className="item">
                      <i className="fa fa-map-marker"></i>
                      <span>121 King Street, Melbourne Victoria 3000 Australia</span>
                  </div>
                  <div className="item">
                      <i className="fa fa-envelope"></i>
                      <span><a href="http://xgio.net/cdn-cgi/l/email-protection#72051b1c06170001321b1c141d5c111d1f"><span className="__cf_email__" data-cfemail="e5928c8b91809796a58c8b838acb868a88">[email&#160;protected]</span></a>
                      </span>
                  </div>
              </div>
          </div>
          <div className="post-body">
              <div className="post-entry">
                  <p>Duis mollis eget augue et lobortis. Nam nunc justo, aliquet sed condimentum vel, faucibus in dolor. Proin eleifend hendrerit rhoncus. Maecenas in tellus posuere, placerat metus vehicula, aliquet sapien. Maecenas
                      egestas aliquet nisi efficitur accumsan. Nullam dui eros, porta eu lorem eget, lacinia tempus velit. Vestibulum magna eros, dapibus ac velit ac, accumsan rutrum velit. Sed ultricies aliquet odio, sed tincidunt
                      lacus dapibus non. Donec eget purus in velit ornare molestie. Donec eu semper ipsum. Vivamus vulputate ultricies dolor, sed imperdiet quam mattis eget.</p>
              </div>
              <div className="contact-form">
                  <form action="http://xgio.net/winters/POST">
                      <div className="form-item">
                          <input type="text" value="Your name *"/>
                      </div>
                      <div className="form-item">
                          <input type="text" value="Your email *"/>
                      </div>
                      <div className="form-item">
                          <input type="text" value="Website"/>
                      </div>
                      <div className="form-item form-captcha">
                          <img src={captcha} alt="" className="wpcf7-captchac"/>
                          <span className="wpcf7-form-control-wrap">
                              <input type="text" value="Captcha"/>
                          </span>
                      </div>
                      <div className="form-textarea">
                          <textarea>Message</textarea>
                      </div>
                      <div className="form-actions">
                          <input type="submit" value="Send"/>
                      </div>
                  </form>
              </div>
              <div className="post-share">
                  <span className="share-toggle pi-btn">
                      <i className="fa fa-share-alt"></i>
                  </span>
                  <div className="share">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-dribbble"></i></a>
                      <a href="#"><i className="fa fa-instagram"></i></a>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
