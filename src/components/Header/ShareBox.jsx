import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class ShareBox extends Component {
  render() {
    return (
      <div className="share-box">
          <Link to="#"><i className="fa fa-facebook"></i></Link>
          <Link to="#"><i className="fa fa-twitter"></i></Link>
          <Link to="#"><i className="fa fa-dribbble"></i></Link>
          <Link to="#"><i className="fa fa-pinterest"></i></Link>
      </div>
    )
  }
}
