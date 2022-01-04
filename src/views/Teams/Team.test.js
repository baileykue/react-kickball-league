import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Team from './Teams';

test("should render a team's details", async () => {
  const { container } = render(
    <MemoryRouter>
      <Team match={{ params: { id: 4 } }} />
    </MemoryRouter>
  );
  await screen.findByText('Mt. Hoodies');
  expect(container).toMatchSnapshot();
});
