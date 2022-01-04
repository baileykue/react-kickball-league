import { render, screen } from '@testing-library/react';
import Home from './Home';

test('checks for home component text', () => {
  render(<Home />);
  const header = screen.getByText(/This is the Home Page/i);
  expect(header).toBeInTheDocument();
});
