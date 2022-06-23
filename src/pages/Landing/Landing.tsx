import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import FullScreenAnimation from 'components/FullScreenAnimation';

const Landing: FC = () => {
  const { t } = useTranslation('config');
  return <FullScreenAnimation>{t('app.title')}</FullScreenAnimation>;
};

export default Landing;
