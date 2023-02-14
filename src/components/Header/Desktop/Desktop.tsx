import React, { FC } from 'react';
import { NavContainer, Brand, NavList, NavItem } from './styles';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import { Routes } from '@/routes/Routes';
import Button from '@/components/Button';
import Sparkles from '@/components/Sparkles';
import NanBrand from '@/components/NanBrand';
import type { NavLinkProp } from '@/components/Header/domain/links';

type DesktopNavProps = {
  links: NavLinkProp[];
};

const DesktopNav: FC<DesktopNavProps> = ({ links }) => {
  const { t } = useTranslation(['config', 'translations']);
  return (
    <NavContainer className="desktop-nav">
      <Link to={Routes.ROOT}>
        <Brand>
          <NanBrand />
        </Brand>
      </Link>

      <NavList>
        {links.map((link) => (
          <NavItem key={link.to}>
            <NavLink to={link.to}>{link.title(t)}</NavLink>
          </NavItem>
        ))}
      </NavList>

      <Sparkles colors={['#FFC700', '#22d0b6', '#22d0b6', '#80a6e9', '#f280b9', '#e35da0', '#0cea86']}>
        <NavLink to={Routes.POWERED}>
          <Button>Powered</Button>
        </NavLink>
      </Sparkles>
    </NavContainer>
  );
};

export default DesktopNav;
