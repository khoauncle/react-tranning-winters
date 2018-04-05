import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class ShareBox extends Component {
  render() {
    return (
      <div class="share-box">
          <Link to="#"><i class="fa fa-facebook"></i></Link>
          <Link to="#"><i class="fa fa-twitter"></i></Link>
          <Link to="#"><i class="fa fa-dribbble"></i></Link>
          <Link to="#"><i class="fa fa-pinterest"></i></Link>
      </div>
    )
  }
}
