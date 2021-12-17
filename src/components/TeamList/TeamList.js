import React from 'react';
import TeamLink from './TeamLink';

export default function TeamList({ teams }) {
  return (
    <div>
      {teams.map((team) => (
        <TeamLink key={team.id} team={team} />
      ))}
    </div>
  );
}
