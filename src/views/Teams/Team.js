import React, { useState, useEffect } from 'react';
import { getTeamById } from '../../services/teams';
import TeamDetail from '../../components/TeamList/TeamDetail';
import './Teams.css';

export default function Team(props) {
  const id = props.match.params.id;
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  // const params = useParams();
  //this is a way to get the correct id without passing team.js as a prop in app js

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeamById(id);
      //const data = await fetchById(params.id);
      setTeam(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h3>Loading team...</h3>;

  return (
    <div className="detail">
      <TeamDetail team={team[0]} showDetail />
    </div>
  );
}
