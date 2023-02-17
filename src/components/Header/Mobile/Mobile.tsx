import React, { FC } from 'react';
import { NavContainer, Brand, MobileContainer, NavList, NavItem, HiddenMenuInput, LabelMenu } from './styles';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import { Routes } from '@/routes/Routes';
import NanBrand from '@/components/NanBrand';
import type { NavLinkProp } from '@/components/Header/domain/links';
import { Divide as Hamburger } from 'hamburger-react';

type MobileNavProps = {
  links: NavLinkProp[];
};

const MobileNav: FC<MobileNavProps> = ({ links }) => {
  const { t } = useTranslation(['config', 'translations']);

  return (
    <NavContainer className="mobile-nav">
      <Link style={{ zIndex: 1001 }} to={Routes.ROOT} aria-label="Home" data-testid="home-link">
        <Brand>
          <NanBrand />
        </Brand>
      </Link>

      <HiddenMenuInput className="side-menu" id="side-menu" />
      <LabelMenu htmlFor="side-menu">
        <Hamburger />
      </LabelMenu>

      <MobileContainer>
        <NavList>
          {links.map((link) => (
            <NavItem key={link.to}>
              <NavLink to={link.to}>{link.title(t)}</NavLink>
            </NavItem>
          ))}
        </NavList>
      </MobileContainer>
    </NavContainer>
  );
};

export default MobileNav;
