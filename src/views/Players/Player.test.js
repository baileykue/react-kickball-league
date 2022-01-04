import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Player from './Player';

test("should render a player's details", async () => {
  const { container } = render(
    <MemoryRouter>
      <Player match={{ params: { id: 2 } }} />
    </MemoryRouter>
  );
  await screen.findByText('Hans Olo');
  expect(container).toMatchSnapshot();
});
