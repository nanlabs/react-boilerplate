import React from 'react';
import { render } from '@/test-utils';
import Header from './Desktop';
import { links } from './domain/links';

test('testing i18n in Header', async () => {
  render(<Header links={links} />);
});
