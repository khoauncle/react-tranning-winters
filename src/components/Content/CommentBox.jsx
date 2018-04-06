import React, { Component } from 'react';
import blog from 'images/blog/12.jpg';

export default class CommentBox extends Component {
  render(){
    return (
      <div id="respond">
          <div className="reply-title">
              <h3 className="h5 text-uppercase">Leaver your comment</h3>
          </div>
          <form>
              <div className="row">
                  <div className="col-md-6">
                      <div className="form-item form-name">
                          <input type="text" value="Your name"/>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="form-item form-email">
                          <input type="text" value="Your email"/>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <div className="form-item form-textarea-wrapper">
                          <textarea>Message</textarea>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="form-actions">
                          <input type="submit" value="Comment" className="pi-btn"/>
                      </div>
                  </div>
              </div>
          </form>
      </div>
    )
  }
}
