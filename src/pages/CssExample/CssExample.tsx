import React, { FC } from 'react';
import FullWidthLayout from '@/layouts/FullWidth';
import classnames from 'classnames';
import styles from './foo.module.css';
import sass from './foo.module.scss';

console.log('styles', styles, sass);

const CssExample: FC = () => {
  return (
    <FullWidthLayout>
      <span className={styles.btn}>Hello</span>
      <span className={classnames(sass['btn-nan'], sass.large)}>nanlabs</span>
    </FullWidthLayout>
  );
};

export default CssExample;
