import React, {Component} from 'react';

const entry_container = {
  width: '100%',
  
  borderLeft: '5px solid black',
  padding: '20px',
};
const entry_style = {
  textAlign:'center',
};

class BlogEntry extends Component {
  render() {
    if(this.props.data){
      // index into which blog to open
      var i = this.props.currentBlog
      var topic = this.props.data[i].topic;
      var date = this.props.data[i].date;
      var author = this.props.data[i].author;
      var text = this.props.data[i].text
    }
    
    return (
      <section style={entry_container} id="BlogEntry">
        <h1 style={entry_style}>{topic}</h1>
        <h3>{text}</h3>
        <h4>{author} - {date}</h4>
      </section>
    );
  }
}

export default BlogEntry;