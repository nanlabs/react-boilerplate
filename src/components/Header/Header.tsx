import React, { FC } from 'react';
import { FixedContainer, Nav, Brand, NavList, NavItem } from './styles';
import { useTranslation } from 'react-i18next';
import useScroll from 'hooks/useScroll';
import { Link, NavLink } from 'react-router-dom';
import { Routes } from 'routes/Routes';
import Button from 'components/Button';
import Sparkles from 'components/Sparkles';
import logo from 'app-assets/images/logo.png';

const Header: FC = () => {
  const { t } = useTranslation(['config', 'translations']);
  const isFixed = useScroll(50);
  return (
    <FixedContainer>
      <Nav condensed={isFixed}>
        <Link to={Routes.ROOT}>
          <Brand src={logo} alt={t('app.title', { ns: 'config' })} />
        </Link>

        <NavList>
          <NavItem>
            <NavLink to={Routes.LINKS_EXAMPLES}>{t('header.howItWorks', { ns: 'translations' })}</NavLink>
          </NavItem>
          <NavItem>{t('header.integrations', { ns: 'translations' })}</NavItem>
          <NavItem>{t('header.pricing', { ns: 'translations' })}</NavItem>
          <NavItem>{t('header.aboutUs', { ns: 'translations' })}</NavItem>
        </NavList>

        <Sparkles colors={['#FFC700', '#22d0b6', '#22d0b6', '#80a6e9', '#f280b9', '#e35da0', '#0cea86']}>
          <NavLink to={Routes.POWERED}>
            <Button>Powered</Button>
          </NavLink>
        </Sparkles>
      </Nav>
    </FixedContainer>
  );
};

export default Header;
