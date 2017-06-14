import React, { Component } from 'react';

const PlayerStats = ({ player }) => {
  if(!player){
    return <div></div>
  }
  return(
    <div>
    {console.log('player->', player)}
    <ol>City: {player.City}</ol>
    <ol>Abbreviation: {player.Abbreviation}</ol>
    <ol>Name: {player.Name}</ol>
    </div>
  )
}

export default PlayerStats
