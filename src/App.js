import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super()
    this.state = {
      games: []
    }
  }

  componentDidMount(){
    axios({
      url:"https://www.mysportsfeeds.com/api/feed/pull/nfl/2016-2017-regular/scoreboard.json?fordate=20161211",
      method:'get',
      auth: {
        username: 'momo989',
        password: 'moshiko1988'
      }
    })
      .then(res => {
        console.log(res)
        // const posts = res.data.data.children.map(obj => obj.data);
        // this.setState({ posts });
      });
  }r
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Fatih</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
