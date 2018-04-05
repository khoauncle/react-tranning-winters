import React, { Component } from 'react';
import blog from '../../../assets/images/blog/12.jpg';

export default class CommentBox extends Component {
  render(){
    return (
      <div id="respond">
          <div class="reply-title">
              <h3 class="h5 text-uppercase">Leaver your comment</h3>
          </div>
          <form>
              <div class="row">
                  <div class="col-md-6">
                      <div class="form-item form-name">
                          <input type="text" value="Your name"/>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="form-item form-email">
                          <input type="text" value="Your email"/>
                      </div>
                  </div>
                  <div class="col-md-12">
                      <div class="form-item form-textarea-wrapper">
                          <textarea>Message</textarea>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="form-actions">
                          <input type="submit" value="Comment" class="pi-btn"/>
                      </div>
                  </div>
              </div>
          </form>
      </div>
    )
  }
}
