import React, {Component, StyleSheet} from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import firebase from '../Components/firebase.js'

const entry_container = {
  flex: '1',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: 50,
  margin: 50
};

class LifeBattery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: {test: "hello"}
    };
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('test');
    itemsRef.on('value', (snapshot) => {
      
      let items = snapshot.val()
      console.log("IN HEREERRERE")
      console.log(items)

      this.setState({
        entry: items
      })
    })
  }

  render() {
    return (
      <div style={entry_container}>
        <span>LIFE BATTERY</span>
        <section style={entry_container}>
          <div style={entry_container}>
            <span>{this.state.entry[Object.keys(this.state.entry)[Object.keys(this.state.entry).length - 1]]["Percentage"]}</span>
          </div>
        </section>
      </div>
    )
  }
}

export default LifeBattery