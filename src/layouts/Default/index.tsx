import React, { FC, ReactNode } from 'react';
import Header from '@/components/Header';
import { Root, Main } from './styles';

type DefaultLayoutProps = {
  children?: ReactNode;
};

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Root data-component="default-layout">
      <Header />
      <Main>{children}</Main>
    </Root>
  );
};

export default DefaultLayout;
