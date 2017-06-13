import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import SearchBar from './components/search_bar/index'

class App extends Component {
  constructor(props){
    super()
    this.state = {
      games: []
    }
    this.onSearchRequest = this.onSearchRequest.bind(this)
  }

  onSearchRequest(){
    axios({
      url:"https://www.mysportsfeeds.com/api/feed/pull/nba/2017/cumulative_player_stats.json",
      method:'get',
      auth: {
        username: 'momo989',
        password: 'moshiko1988'
      },
      data:{
        team: 'bos'
      }
    })
      .then(res => {
        console.log(res)
        // const posts = res.data.data.children.map(obj => obj.data);
        // this.setState({ posts });
      });
  }
  render() {
    return (
      <div>
        <SearchBar onSearchRequest = {this.onSearchRequest}/>
      </div>
    );
  }
}

export default App;
