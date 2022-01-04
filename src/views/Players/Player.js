import { useState, useEffect } from 'react';
import { getPlayerById } from '../../services/players';
import PlayerDetail from '../../components/PlayerList/PlayerDetail';
import './Players.css';

export default function Player(props) {
  const id = props.match.params.id;
  const [player, setPlayer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlayerById(id);
      setPlayer(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h3>Loading team...</h3>;

  return (
    <div className="detail">
      <PlayerDetail player={player} showDetail />
    </div>
  );
}
