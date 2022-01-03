import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamList({ name, id }) {
  return (
    <div>
      <Link to={`/teams/${id}`}>{name}</Link>
    </div>
  );
}
