import React, { useState, useEffect } from 'react';
import { fetchTeams } from '../../services/teams';
import TeamList from '../../components/TeamList/TeamList';

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
    <div>
      <h1>this is the teams page</h1>
      <TeamList teams={teams} />
    </div>
  );
}
