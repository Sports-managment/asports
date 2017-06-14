import React, {Component} from 'react'
import SearchListItem from '../search_list_item/index'

class SearchList extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <ul className="col-md-4 list-group">
        {this.props.searchValue.map((player)=> {
          return (
            <SearchListItem
            key={player.FirstName}
            player={player}
            />
          )
        })}
      </ul>
    )
  }
}
export default SearchList
