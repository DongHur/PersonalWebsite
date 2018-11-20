import React, {Component} from 'react';
import "./BlogScroll.css";


class BlogScroll extends Component {
  
  render() {
    if(this.props.data){
      var blogs = this.props.data.map((blog, index) => {
        return (
          <div 
            style={{background: 'url(images/' + blog.image + ')'}}
            className="scroll_entry" 
            onClick={() => this.props.changeBlog(index)}
            key={index}
          >
            <span>{blog.topic}</span>
            <span>{blog.description}</span>
            <span>{blog.date}</span>
            <span>{blog.author}</span>
          </div>
        )
      })
    }

    return (
      <div className="scroll_container" id="BlogScroll">
        <div className="scroll_style">Blogs</div>
        <div className="scroll_list_container">
          {blogs}
        </div>
      </div>
    );
  }
}

export default BlogScroll;