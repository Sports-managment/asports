import React, {Component} from 'react'
import SearchListItem from '../search_list_item/index'

const SearchList = (props)=>{
  const searchItem = props.searchValue.map((player)=> {
        console.log('Im the player', player.FirstName);
    return (
      <SearchListItem
      key={player.FirstName}
      player={player}
      />
    )

  })
    return(
      <div>

      </div>
    )
}
export default SearchList
