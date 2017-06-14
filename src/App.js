import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import SearchBar from './components/search_bar/index'
import SearchList from './components/search_list/index'

class App extends Component {
  constructor(props){
    super()
    this.state = {
      searchValue: []
    }
    this.onSearchRequest = this.onSearchRequest.bind(this)
  }

  onSearchRequest(name){
    axios({
      url:`https://www.mysportsfeeds.com/api/feed/pull/nba/2017/cumulative_player_stats.json?player=${name}`,
      method:'get',
      auth: {
        username: 'momo989',
        password: 'moshiko1988'
      }
    })
      .then(res => {
        if (!res.data.cumulativeplayerstats.playerstatsentry) {
          return
        }
        const searchValue = res.data.cumulativeplayerstats.playerstatsentry.map(obj => obj.player)
        this.setState({ searchValue })
      })
  }
  
  render() {
    return (
      <div>
        <SearchBar onSearchRequest = {this.onSearchRequest}/>
        <SearchList searchValue = {this.state.searchValue}/>
      </div>
    );
  }
}

export default App;
