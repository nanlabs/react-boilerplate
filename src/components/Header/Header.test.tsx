import React from 'react';
import { render, screen } from 'utils/test/test-utils';
import Header from './Header';

test('testing i18n in Header', async () => {
  render(<Header />);
  expect(screen.getByText('Router example')).toBeTruthy();
});
