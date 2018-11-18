import React, {Component} from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        Hello
        <Link to='/'>Home</Link>
      </div>
    )
  }
}

export default Blog