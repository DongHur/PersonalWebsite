import React, {Component} from 'react';

const title_container = {
  display: 'flex',
  width: '100%',
  margin: '10px',
  flexDirection: 'row',
  justifyContent: 'space-between',
};
const title_style = {
};

class BlogHeader extends Component {
  render() {
    if(this.props.data) {
      var description = this.props.data.description;
    }
    return (
      <section style={title_container} id="BlogHeader">
        <div>HOME</div>
        <div style={title_style}>Hur Blog.</div>
      </section>
    );
  }
}

export default BlogHeader;