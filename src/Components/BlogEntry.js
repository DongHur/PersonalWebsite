import React, {Component} from 'react';
import $ from 'jquery';

const entry_container = {
  width: '100%',
  padding: '20px',
  overflowY: 'scroll',
};
const entry_style = {
  textAlign: 'center',
  fontSize: '1.7em',
};
const ending_style = {
  margin:'10px',
  width: '100%',
  textAlign: 'right',
  paddingRight: '70px',
}
const image_style = {
  borderRadius: '5px', 
  margin:'15px 0px 15px 0px',
  height: '100%',
  width: '100%',
}

class BlogEntry extends Component {
  render() {
    if(this.props.data){
      // index into which blog to open
      var data_i = this.props.data[this.props.currentBlog]
      var topic = data_i.topic;
      var date = data_i.date;
      var author = data_i.author;

      var $content = $( "#content" )
      var text = $.parseHTML(data_i.text)
      $content.append( text );
      
      // console.log(...text)
      // var parsed_doc = (...text)
      var image = "images/blog/" + data_i.image;
    }
    
    return (
      <section style={entry_container} id="BlogEntry">
        <h3 style={entry_style}>{topic}</h3>
        <img style={image_style}src={image} />
        {/*<span>{parsed_doc}</span>*/}
        <span id = "content"></span>
        <div style={ending_style}>{author} - {date}</div>
      </section>
    );
  }
}

export default BlogEntry;