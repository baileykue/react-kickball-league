import React from 'react';
import { Link } from 'react-router-dom';
import TeamDetail from '../../views/Teams/TeamDetail';

export default function TeamLink({ team }) {
  return (
    <div>
      <TeamDetail team={team} />
    </div>
  );
}
