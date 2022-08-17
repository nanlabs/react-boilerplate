import { TFunction } from 'i18next';
import { Routes } from 'routes/Routes';

export type NavLinkProp = {
  to: string;
  title: (t: TFunction) => string;
};

export const links: NavLinkProp[] = [
  {
    to: Routes.LINKS_EXAMPLES,
    title: (t) => t('header.routerLinkExample', { ns: 'translations' }),
  },
  {
    to: Routes.API_EXAMPLES,
    title: (t) => t('header.integrations', { ns: 'translations' }),
  },
  {
    to: Routes.CSS_EXAMPLE,
    title: (t) => t('header.cssExample', { ns: 'translations' }),
  },
];
