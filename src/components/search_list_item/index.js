import React, {Component} from 'react'

const SearchListItem = ({player, onClickForDetail})=>{
  return(
    <ul >
    <button onClick={()=>onClickForDetail()}>
       {player.FirstName}
      {' '}
      {player.LastName}
    </button>
    </ul>
  )
}


export default SearchListItem
