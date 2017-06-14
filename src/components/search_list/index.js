import React, {Component} from 'react'
import SearchListItem from '../search_list_item/index'
import PlayerStats from '../player_stats/index'

class SearchList extends Component{
  constructor(){
    super();
    this.state = {
      player: null
    }
    this.onClickForDetail = this.onClickForDetail.bind(this)
  }

  onClickForDetail(player){
    // console.log(player);
    this.setState({player: player.team})
  }

  render(){
    return(
// onClick={this.onClickForDetail}
      <ul className="col-md-4 list-group">
        {this.props.searchValue.map((player)=> {
          return (
            <SearchListItem
            onClickForDetail = {this.onClickForDetail}
            key={player.player.FirstName}
            player={player}
            />
          )
        })}
        <PlayerStats
          player = {this.state.player}
          />
      </ul>
    )
  }
}
export default SearchList
