import React, { FC, ReactNode } from 'react';
import Header from 'components/Header';
import { Root, Main } from './styles';

type FullWidthLayoutProps = {
  children?: ReactNode;
};

const FullWidthLayout: FC<FullWidthLayoutProps> = ({ children }) => {
  return (
    <Root data-component="full-width-layout">
      <Header />
      <Main>{children}</Main>
    </Root>
  );
};

export default FullWidthLayout;
