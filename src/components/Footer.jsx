import React, { Component } from 'react';

export default class Footer extends Component {
  render(){
    return (
      <footer id="footer" class="footer">
          <div class="container">
              <div class="row">
                  <div class="col-md-4">
                      <div class="widget widget_newsletter">
                          <h4>Newsletter</h4>
                          <div class="desc">
                              <p>Subscribe now if you want to recieve updates and news via email.</p>
                          </div>
                          <form id="subscribe-form" action="http://xgio.net/winters/POST">
                              <div class="form-item form-remove">
                                  <input type="text" id="subscribe-email" value="Enter your email"/>
                              </div>
                              <div class="form-actions form-remove">
                                  <input type="submit" id="subscribe-button" value="Send"/>
                              </div>
                              <div class="subscribe-status"></div>
                          </form>
                      </div>
                  </div>
                  <div class="col-md-3">
                      <div class="widget widget_meta">
                          <h4>Meta</h4>
                          <ul>
                              <li><a href="#">Log in</a></li>
                              <li><a href="#">Entries RSS</a></li>
                              <li><a href="#">Comments RSS</a></li>
                          </ul>
                      </div>
                  </div>
                  <div class="col-md-3">
                      <div class="widget widget_latest_tweet">
                          <h4>Latest tweet</h4>
                          <div class="latest-tweets" data-username="hoa_doi_2911" data-number="5" data-modpath="twitter/index.html">
                          </div>
                      </div>
                  </div>
                  <div class="col-md-2">
                      <div class="widget widget_archive">
                          <h4>Archives</h4>
                          <ul>
                              <li><a href="#">September 2014</a></li>
                              <li><a href="#">July 2014</a></li>
                              <li><a href="#">June 2014</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div class="copyright text-center">
              <p>Copyrights © 2014 All Rights Reserved by Xgio</p>
          </div>
      </footer>
    )
  }
}
