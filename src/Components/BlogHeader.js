import React, {Component} from 'react';
import './BlogHeader.css';

class BlogHeader extends Component {
  render() {
    if(this.props.data) {
      var description = this.props.data.description;
    }
    return (
      <section className="title_container" id="BlogHeader">
        <div><a id="home_button" href='/'>HOME</a></div>
        <div className="title_style">Hur Blog.</div>
        <div><a id="home_button" href='/'>DH</a></div>
      </section>
    );
  }
}

export default BlogHeader;