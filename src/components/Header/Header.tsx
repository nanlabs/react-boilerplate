import React, { FC } from 'react';
import { FixedContainer, Nav } from './styles';
import useScroll from 'hooks/useScroll';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { links } from './domain/links';

const Header: FC = () => {
  const isFixed = useScroll(50);

  console.log('Ho ');

  return (
    <FixedContainer>
      <Nav condensed={isFixed}>
        <Desktop links={links} />
        <Mobile links={links} />
      </Nav>
    </FixedContainer>
  );
};

export default Header;
