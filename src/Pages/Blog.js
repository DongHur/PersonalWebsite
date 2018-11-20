import React, {Component} from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import './Blog.css';

import BlogHeader from '../Components/BlogHeader';
import BlogScroll from '../Components/BlogScroll';
import BlogEntry from '../Components/BlogEntry';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogData: {},
      currentBlog: 0,
    };
  }

  getBlogData() {
    $.ajax({
      url: '/blogData.json',
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({blogData: data})
      },
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  changeBlog = (currentBlog) => {
    this.setState({currentBlog})
  }

  componentDidMount(){
    this.getBlogData();
  }

  render() {
    return (
      <div className="Blog">
        <section className="Blog-header">
          <BlogHeader data={this.state.blogData.main}/>
        </section>
        <div className="Blog-section">
          <section className="Blog-scroll">
            <BlogScroll 
              data={this.state.blogData.blog}
              changeBlog={this.changeBlog}
            />
          </section>
          <section className="Blog-entry">
            <BlogEntry 
              data={this.state.blogData.blog}
              currentBlog={this.state.currentBlog}
            />
          </section>
        </div>
        {/*<Link to='/'>Home</Link>*/}
      </div>
    )
  }
}

export default Blog