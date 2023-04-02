import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Test', () => {
  render(<App />);
  expect(screen.getByText('hello world')).toBeInTheDocument();
});
