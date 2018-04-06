import React, { Component } from 'react';

export default class PostPaggination extends Component {
  render(){
    return (
      <div className="pagination">
          <a href="#" className="prev">&laquo; Newer posts</a>
          <a href="#" className="next">Older posts &raquo;</a>
      </div>
    )
  }
}
