import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources, { ns, defaultNS } from './resources';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: resources,
  // have a common namespace used around the full app
  ns: ns,
  defaultNS: defaultNS,
  debug: true,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;
