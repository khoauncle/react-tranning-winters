import React, {Component} from 'react';

export default class SearchBox extends Component {
  render() {
    return (
      <div class="search-box">
          <span class="icon-search">
              <i class="fa fa-search"></i>
          </span>
          <form action="http://xgio.net/winters/GET">
              <input type="search" value="Search and hit enter"/>
          </form>
      </div>
    )
  }
}
