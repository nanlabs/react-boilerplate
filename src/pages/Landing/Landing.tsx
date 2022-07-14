import React, { FC } from 'react';
// import { useTranslation } from 'react-i18next';
// import FullScreenAnimation from 'components/FullScreenAnimation';
import FullWidthLayout from 'layouts/FullWidth';
import Hero from 'components/Hero';
Hero;

const Landing: FC = () => {
  // const { t } = useTranslation('config');
  return (
    <FullWidthLayout>
      <Hero />
    </FullWidthLayout>
  );
};

export default Landing;
