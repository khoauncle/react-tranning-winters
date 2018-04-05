import React, { Component } from 'react';
import blog from '../../../assets/images/blog/12.jpg';

export default class CommentList extends Component {
  render(){
    return (
      <div id="comments">
          <div class="comments-inner-wrap">
              <h3 id="comments-title" class="h5 text-uppercase">3 Comments</h3>
              <ul class="commentlist">
                  <li class="comment">
                      <div class="comment-box">
                          <div class="comment-author">
                              <a href="#"><img src={blog} alt=""/></a>
                          </div>
                          <div class="comment-body">
                              <cite class="fn text-uppercase"><a href="#">Justin</a></cite>
                              <div class="comment-meta">
                                  <span>July 12, 2014</span>
                              </div>
                              <p>Mauris tincidunt, quam at feugiat efficitur, justo nunc efficitur justo, a hendrerit lectus neque eu nibh. Praesent eu sem erat. Fusce non sagittis lorem.</p>
                          </div>
                          <div class="comment-abs">
                              <a href="#" class="comment-edit-link">Edit</a> //
                              <a href="#" class="comment-reply-link">Reply</a>
                          </div>
                      </div>
                      <ul class="children">
                          <li class="comment">
                              <div class="comment-box">
                                  <div class="comment-author">
                                      <a href="#"><img src={blog} alt=""/></a>
                                  </div>
                                  <div class="comment-body">
                                      <cite class="fn text-uppercase"><a href="#">Justin</a></cite>
                                      <div class="comment-meta">
                                          <span>July 12, 2014</span>
                                      </div>
                                      <p>Aliquam volutpat elit non urna faucibus condimentum. Pellentesque nibh libero, consequat at nibh a, tincidunt rutrum magna. Curabitur in posuere risus, dictum euismod dolor. Vestibulum auctor
                                          orci sed elit ultricies tempus. Praesent facilisis tellus turpis, ac congue lorem consectetur ac.</p>
                                  </div>
                                  <div class="comment-abs">
                                      <a href="#" class="comment-edit-link">Edit</a> //
                                      <a href="#" class="comment-reply-link">Reply</a>
                                  </div>
                              </div>
                          </li>
                      </ul>
                  </li>
                  <li class="comment">
                      <div class="comment-box">
                          <div class="comment-author">
                              <a href="#"><img src={blog} alt=""/></a>
                          </div>
                          <div class="comment-body">
                              <cite class="fn text-uppercase"><a href="#">Justin</a></cite>
                              <div class="comment-meta">
                                  <span>July 12, 2014</span>
                              </div>
                              <p>Pellentesque nibh libero, consequat at nibh a, tincidunt rutrum magna. Curabitur in posuere risus, dictum euismod dolor. Vestibulum auctor orci sed elit ultricies tempus. Praesent facilisis tellus turpis,
                                  ac congue lorem consectetur ac.</p>
                          </div>
                          <div class="comment-abs">
                              <a href="#" class="comment-edit-link">Edit</a> //
                              <a href="#" class="comment-reply-link">Reply</a>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
    )
  }
}
