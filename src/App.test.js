import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text Search a currency', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search a currency/i);
  expect(linkElement).toBeInTheDocument();
});
