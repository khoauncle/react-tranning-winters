import React, { Component } from 'react';

export default class PostPaggination extends Component {
  render(){
    return (
      <div class="pagination">
          <a href="#" class="prev">&laquo; Newer posts</a>
          <a href="#" class="next">Older posts &raquo;</a>
      </div>
    )
  }
}
