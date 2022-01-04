import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Players from './Players';

test('should render all players', async () => {
  const { container } = render(
    <MemoryRouter>
      <Players />
    </MemoryRouter>
  );
  await screen.findByText('Dwayne Elizondo Mountain Dew Herbert Camacho');
  expect(container).toMatchSnapshot();
});
