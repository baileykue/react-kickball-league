import React, { useState } from 'react';
import PlayerLink from '../PlayerList/PlayerLink';

export default function TeamDetail(props) {
  const id = props.match.params.id;
  const [team, setTeam] = useState(null);
  return <div></div>;
}
