import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayerDetail({ player }) {
  console.log(player);
  return (
    <div>
      <h1>{player.name}</h1>
      <h2>{player.position}</h2>
      <Link to={`/teams/${player.team_id}`}>{player.teams.name}</Link>
    </div>
  );
}
