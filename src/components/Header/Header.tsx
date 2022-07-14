import React, { FC } from 'react';
import { FixedContainer, Nav, NavContainer, Brand, NavList, NavItem } from './styles';
import { useTranslation } from 'react-i18next';
import useScroll from 'hooks/useScroll';
import { Link, NavLink } from 'react-router-dom';
import { Routes } from 'routes/Routes';
import Button from 'components/Button';
import Sparkles from 'components/Sparkles';
import NanBrand from 'components/NanBrand';

const Header: FC = () => {
  const { t } = useTranslation(['config', 'translations']);
  const isFixed = useScroll(50);

  return (
    <FixedContainer>
      <Nav condensed={isFixed}>
        <NavContainer>
          <Link to={Routes.ROOT}>
            <Brand>
              <NanBrand />
            </Brand>
          </Link>

          <NavList>
            <NavItem>
              <NavLink to={Routes.LINKS_EXAMPLES}>{t('header.routerLinkExample', { ns: 'translations' })}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={Routes.API_EXAMPLES}>{t('header.integrations', { ns: 'translations' })}</NavLink>
            </NavItem>
          </NavList>

          <Sparkles colors={['#FFC700', '#22d0b6', '#22d0b6', '#80a6e9', '#f280b9', '#e35da0', '#0cea86']}>
            <NavLink to={Routes.POWERED}>
              <Button>Powered</Button>
            </NavLink>
          </Sparkles>
        </NavContainer>
      </Nav>
    </FixedContainer>
  );
};

export default Header;
