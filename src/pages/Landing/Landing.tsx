import React, { FC } from 'react';
import FullWidthLayout from '@/layouts/FullWidth';
import Hero from '@/components/Hero';

const Landing: FC = () => {
  return (
    <FullWidthLayout>
      <Hero />
    </FullWidthLayout>
  );
};

export default Landing;
