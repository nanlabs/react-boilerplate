import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import FullScreenAnimation from 'components/FullScreenAnimation';
import FullWidthLayout from 'layouts/FullWidth';

const Powered: FC = () => {
  const { t } = useTranslation();
  return (
    <FullWidthLayout>
      <FullScreenAnimation>{t('brand')}</FullScreenAnimation>
    </FullWidthLayout>
  );
};

export default Powered;
