import React from 'react';
import PlayerLink from '../../components/PlayerList/PlayerLink';

export default function Team({ team }) {
  console.log(team);
  return (
    <div>
      {team.players.map((player) => (
        <PlayerLink key={player.id} player={player} />
      ))}
    </div>
  );
}
