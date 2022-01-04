import React from 'react';
import PlayerLink from '../PlayerList/PlayerLink';

export default function TeamDetail({ team }) {
  return (
    <>
      <h1>{team.name}</h1>
      <h2>
        {team.city}, {team.state}
      </h2>
      <p>Players:</p>
      {team.players.map((player) => (
        <PlayerLink key={player.id} player={player} />
      ))}
    </>
  );
}
