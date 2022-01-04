import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayerDetail({ player }) {
  return (
    <div>
      <h1>{player.name}</h1>
      <h2>Position: {player.position}</h2>
      <h3>Team: </h3>
      <Link to={`/teams/${player.team_id}`}>{player.teams.name}</Link>
    </div>
  );
}
