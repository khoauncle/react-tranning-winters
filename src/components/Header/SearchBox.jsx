import React, {Component} from 'react';

export default class SearchBox extends Component {
  render() {
    return (
      <div className="search-box">
          <span className="icon-search">
              <i className="fa fa-search"></i>
          </span>
          <form action="http://xgio.net/winters/GET">
              <input type="search" value="Search and hit enter"/>
          </form>
      </div>
    )
  }
}
