import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayerLink({ player }) {
  return (
    <div>
      <Link>{player.name}</Link>
    </div>
  );
}
