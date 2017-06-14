import React, {Component} from 'react'
import SearchListItem from '../search_list_item/index'

class SearchList extends Component{
  constructor(){
    super();
  }

  onClickForDetail(){
    console.log("mosshhh");
  }
  render(){
    return(
// onClick={this.onClickForDetail}
      <ul className="col-md-4 list-group">
        {this.props.searchValue.map((player)=> {
          return (
            <SearchListItem
            onClickForDetail = {this.onClickForDetail}
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
