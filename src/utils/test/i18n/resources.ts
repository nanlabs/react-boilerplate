import translations from 'app-assets/locales/en/translations.json';
import config from 'app-assets/locales/en/config.json';

const resources = {
  en: {
    translations,
    config,
  },
};

export const ns = ['translations', 'config'];

export const defaultNS = 'translations';

export default resources;
