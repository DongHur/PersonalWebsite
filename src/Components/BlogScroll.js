import React, {Component} from 'react';
import "./BlogScroll.css";

class BlogScroll extends Component {
  
  render() {
    if(this.props.data){
      var blogs = this.props.data.map((blog, index) => {
        return (
          <div 
            style={{
              background: 'url(images/blog/' + blog.image + ')',
              backgroundRepeat: "no-repeat", 
              backgroundSize: "100% 100%",
            }}
            className="scroll_entry" 
            onClick={() => this.props.changeBlog(index)}
            key={index}
          >
            <span><strong>{blog.topic}</strong></span>
            <span><strong><i>{blog.description}</i></strong></span>
            <span><strong>{blog.author} - {blog.date}</strong></span>
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