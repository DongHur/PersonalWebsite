import React, {Component} from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

class LifeBattery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogData: {}
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

  componentDidMount(){
    this.getBlogData();
  }

  render() {
    return (
      <div className="LifeBattery">
        <span>Hello</span>
      </div>
    )
  }
}

export default LifeBattery