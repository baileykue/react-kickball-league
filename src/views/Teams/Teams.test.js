import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Teams from './Teams';

test('should render a list of teams', async () => {
  const { container } = render(
    <MemoryRouter>
      <Teams />
    </MemoryRouter>
  );
  await screen.findByText('Vancougers');
  expect(container).toMatchSnapshot();
});
