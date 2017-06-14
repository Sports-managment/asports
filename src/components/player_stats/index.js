import React, { Component } from 'react';

const PlayerStats = ({ player }) => {
  if(!player){
    return <div></div>
  }
  return(
    <div>
    {console.log('player->', player)}
    <ol>City: {player.team.City}</ol>
    <ol>Abbreviation: {player.team.Abbreviation}</ol>
    <ol>Name: {player.team.Name}</ol>
    <ol>Jersey Number: {player.player.JerseyNumber}</ol>
    <ol>Position: {player.player.Position} </ol>
    </div>
  )
}

export default PlayerStats
