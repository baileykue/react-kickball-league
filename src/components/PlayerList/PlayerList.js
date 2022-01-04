import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayerList({ name, id }) {
  return (
    <div>
      <Link to={`/players/${id}`}>{name}</Link>
    </div>
  );
}
