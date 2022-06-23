import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import FullScreenAnimation from 'components/FullScreenAnimation';

const Powered: FC = () => {
  const { t } = useTranslation();
  return <FullScreenAnimation>{t('brand')}</FullScreenAnimation>;
};

export default Powered;
