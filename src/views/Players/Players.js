import React, { useState, useEffect } from 'react';
import { fetchPlayers } from '../../services/players';
import PlayerList from '../../components/PlayerList/PlayerList';
import './Players.css';

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
    <div className="players">
      <h1>These are the players</h1>
      {players.map((player) => (
        <PlayerList key={player.id} {...player} />
      ))}
    </div>
  );
}
