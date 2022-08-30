import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Widget from './';

test('Initial clicker state', () => {
  render(<Widget />);
  const button = screen.getByRole('button');
  expect(button.textContent).toBe('Clicked 0');
});

test('Button clicked', () => {
  render(<Widget />);  
  const button = screen.getByRole('button');
  fireEvent(button, new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  }));
  expect(button.textContent).toBe('Clicked 1');
});
