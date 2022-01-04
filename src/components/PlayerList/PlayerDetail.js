import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayerDetail({ player }) {
  return (
    <div className="detail">
      <h1>{player.name}</h1>
      <h3>Position: {player.position}</h3>
      <label>
        Team:
        <Link to={`/teams/${player.team_id}`}>{player.teams.name}</Link>
      </label>
    </div>
  );
}
