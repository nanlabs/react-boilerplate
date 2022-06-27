import React from 'react';
import { render, screen } from 'utils/test/test-utils';
import Button from './Button';

test('simple Button test', async () => {
  render(<Button>testing is awesome</Button>);
  expect(screen.getByText('testing is awesome')).toBeTruthy();
});
