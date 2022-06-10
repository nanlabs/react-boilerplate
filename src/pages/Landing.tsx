import React from 'react';
import Cracked from 'components/Animation/Cracked';

import './Landing.css';
import { useTranslation } from 'react-i18next';

const Landing = () => {
  const { t } = useTranslation('config');

  return <Cracked>{t('app.title')}</Cracked>;
};

export default Landing;
