import React, { Component } from 'react';
import blog from 'images/blog/12.jpg';

export default class CommentList extends Component {
  render(){
    return (
      <div id="comments">
          <div className="comments-inner-wrap">
              <h3 id="comments-title" className="h5 text-uppercase">3 Comments</h3>
              <ul className="commentlist">
                  <li className="comment">
                      <div className="comment-box">
                          <div className="comment-author">
                              <a href="#"><img src={blog} alt=""/></a>
                          </div>
                          <div className="comment-body">
                              <cite className="fn text-uppercase"><a href="#">Justin</a></cite>
                              <div className="comment-meta">
                                  <span>July 12, 2014</span>
                              </div>
                              <p>Mauris tincidunt, quam at feugiat efficitur, justo nunc efficitur justo, a hendrerit lectus neque eu nibh. Praesent eu sem erat. Fusce non sagittis lorem.</p>
                          </div>
                          <div className="comment-abs">
                              <a href="#" className="comment-edit-link">Edit</a> //
                              <a href="#" className="comment-reply-link">Reply</a>
                          </div>
                      </div>
                      <ul className="children">
                          <li className="comment">
                              <div className="comment-box">
                                  <div className="comment-author">
                                      <a href="#"><img src={blog} alt=""/></a>
                                  </div>
                                  <div className="comment-body">
                                      <cite className="fn text-uppercase"><a href="#">Justin</a></cite>
                                      <div className="comment-meta">
                                          <span>July 12, 2014</span>
                                      </div>
                                      <p>Aliquam volutpat elit non urna faucibus condimentum. Pellentesque nibh libero, consequat at nibh a, tincidunt rutrum magna. Curabitur in posuere risus, dictum euismod dolor. Vestibulum auctor
                                          orci sed elit ultricies tempus. Praesent facilisis tellus turpis, ac congue lorem consectetur ac.</p>
                                  </div>
                                  <div className="comment-abs">
                                      <a href="#" className="comment-edit-link">Edit</a> //
                                      <a href="#" className="comment-reply-link">Reply</a>
                                  </div>
                              </div>
                          </li>
                      </ul>
                  </li>
                  <li className="comment">
                      <div className="comment-box">
                          <div className="comment-author">
                              <a href="#"><img src={blog} alt=""/></a>
                          </div>
                          <div className="comment-body">
                              <cite className="fn text-uppercase"><a href="#">Justin</a></cite>
                              <div className="comment-meta">
                                  <span>July 12, 2014</span>
                              </div>
                              <p>Pellentesque nibh libero, consequat at nibh a, tincidunt rutrum magna. Curabitur in posuere risus, dictum euismod dolor. Vestibulum auctor orci sed elit ultricies tempus. Praesent facilisis tellus turpis,
                                  ac congue lorem consectetur ac.</p>
                          </div>
                          <div className="comment-abs">
                              <a href="#" className="comment-edit-link">Edit</a> //
                              <a href="#" className="comment-reply-link">Reply</a>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
    )
  }
}
