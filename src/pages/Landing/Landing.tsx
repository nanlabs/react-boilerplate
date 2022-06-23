import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import FullScreenAnimation from 'components/FullScreenAnimation';
import FullWidthLayout from 'layouts/FullWidth';

const Landing: FC = () => {
  const { t } = useTranslation('config');
  return (
    <FullWidthLayout>
      <FullScreenAnimation>{t('app.title')}</FullScreenAnimation>
    </FullWidthLayout>
  );
};

export default Landing;
