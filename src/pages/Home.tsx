import React from 'react';
import Cracked from 'components/Animation/Cracked';

import './Landing.css';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return <Cracked>{t('brand')}</Cracked>;
};

export default Home;
