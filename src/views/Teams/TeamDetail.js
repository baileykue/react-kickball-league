import React, { useState, useEffect } from 'react';
import { getTeamById } from '../../services/teams';
import Team from '../../components/TeamList/Team';

export default function TeamDetail(props) {
  const [team, setTeam] = useState({ players: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeamById(props.match.params.id);
      setTeam(data[0]);
    };
    fetchData();
  }, []);

  if (!team) return <h3>Loading team...</h3>;

  return <Team team={team} showDetail />;
}
