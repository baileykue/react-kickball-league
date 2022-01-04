import React, { useState, useEffect } from 'react';
import { fetchTeams } from '../../services/teams';
import TeamList from '../../components/TeamList/TeamList';
import './Teams.css';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
    };
    fetchData();
  }, []);

  return (
    <div className="teams">
      <h1>These are the Teams</h1>
      {teams.map((team) => (
        <TeamList key={team.id} {...team} />
      ))}
    </div>
  );
}
