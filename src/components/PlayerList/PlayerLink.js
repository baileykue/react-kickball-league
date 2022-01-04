import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayerLink({ player }) {
  return (
    <div>
      <Link to={`/players/${player.id}`}>{player.name}</Link>
    </div>
  );
}
