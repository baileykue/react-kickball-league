import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamList({ name, id }) {
  return (
    <div>
      {/* to={'/teams/${props.teams.name}'} */}
      <Link>{name}</Link>
    </div>
  );
}
