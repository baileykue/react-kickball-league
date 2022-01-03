import React from 'react';
import PlayerLink from '../PlayerList/PlayerLink';

export default function TeamDetail({ team }) {
  return (
    <div>
      {team[0].players.map((player) => (
        <PlayerLink key={player.id} player={player} />
      ))}
    </div>
  );
}
