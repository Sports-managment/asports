import React, {Component} from 'react'

const SearchListItem = ({player, onClickForDetail})=>{
  return(
    <ul >
    <button onClick={()=>onClickForDetail(player)}>
       {player.player.FirstName}
      {' '}
      {player.player.LastName}
    </button>
    </ul>
  )
}


export default SearchListItem
