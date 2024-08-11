import React from 'react'
import Players from './Players'
import Player from './Player'

const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {Players.map((player, index) => (
            <Player key={index} {...player} />
        ))}
    </div>
  );
}

export default PlayersList;