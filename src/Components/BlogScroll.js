import React, {Component} from 'react';
import "./BlogScroll.css";


class BlogScroll extends Component {
  
  render() {
    if(this.props.data){
      var topic = this.props.data.topic;
      var image = "images/"+this.props.data.image;
      var description = this.props.data.description;
      var date = this.props.data.date;
      var author = this.props.data.author;

      var blogs = this.props.data.map((blog, index) => {
        return (
          <div 
            className="scroll_entry" 
            onClick={() => this.props.changeBlog(index)}
            key={index}
          >
            <h3>{blog.topic}</h3>
            <h3>{blog.description}</h3>
            <h3>{blog.date}</h3>
            <h3>{blog.author}</h3>
          </div>
        )
      })
    }

    return (
      <div className="scroll_container" id="BlogScroll">
        <h1 className="scroll_style">Blogs</h1>
        <div className="scroll_list_container">
          {blogs}
        </div>
      </div>
    );
  }
}

// "topic": "Topic 1",
// "image": "Image URL",
// "description": "Short Description",
// "date": "November 18, 2018",
// "author": "Dong Hur",
// "text": ""

export default BlogScroll;