import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamLink({ team }) {
  return (
    <div>
      <Link key={team.id} to={`/teams/${team.id}`}>
        {team.name}
      </Link>
    </div>
  );
}
