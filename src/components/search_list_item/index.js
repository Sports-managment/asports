import React, {Component} from 'react'

const SearchListItem = ({player})=>{
  return(
    <ul>
      {player.FirstName}
      {' '}
      {player.LastName}
    </ul>
  )
}


export default SearchListItem
