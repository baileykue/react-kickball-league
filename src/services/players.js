import { checkError, client } from './client';

export async function fetchPlayers() {
  const response = await client.from('players').select();
  return checkError(response);
}

export async function getPlayerById(id) {
  const response = await client.from('players').select('*, teams(*)').match({ id });
  return checkError(response);
}
