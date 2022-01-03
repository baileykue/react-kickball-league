import React, { useState, useEffect } from 'react';
import { fetchPlayers } from '../../services/players';
import PlayerList from '../../components/PlayerList/PlayerList';

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>This is the players page</h1>
      {players.map((player) => (
        <PlayerList key={player.id} {...player} />
      ))}
    </div>
  );
}
