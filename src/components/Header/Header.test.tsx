import React from 'react';
import { render, screen } from '@/utils/test/test-utils';
import Header from './Desktop';
import { links } from './domain/links';

test('testing i18n in Header', async () => {
  render(<Header links={links} />);
  expect(screen.getByText('Router example')).toBeTruthy();
});
