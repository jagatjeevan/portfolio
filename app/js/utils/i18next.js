// @flow
import i18next from 'i18next';
import i18nextXhr from 'i18next-xhr-backend';
import i18nextLangDetector from 'i18next-browser-languagedetector';

const config = {
  namespace: '',
  i18nResourcePrefix: 'locales',
};

class I18nTranslator {
  translator: ?((key: string, data?: ?Object) => string);

  constructor() {
    this.translator = null;
  }

  initiateTranslator(resolve: () => void, reject: (err: Error) => void): Promise<number> {
    return new Promise(() => {
      i18next
        .use(i18nextXhr)
        .use(i18nextLangDetector)
        .init({
          ns: config.namespace,
          defaultNS: config.namespace,
          fallbackLng: 'en-US',
          backend: {
            loadPath: './locales/{{lng}}/translations.json',
          },
          detection: {
            order: ['cookie'],
            caches: [],
            lookupCookie: 'i18next',
          },
        }, (errs, t) => {
          // Ignore translation file not found for a locale
          const loadErrs = (errs || []).filter(err => !((err || '').toLowerCase().includes('failed loading')));
          if (loadErrs.length > 0) {
            reject(loadErrs);
          } else {
            this.translator = t;
            resolve();
          }
        });
    });
  }

  translate(key: string): string {
    if (!this.translator) {
      throw new Error('Translator not initialized');
    }
    return this.translator(key);
  }
}

const translatorInstance = new I18nTranslator();

export default translatorInstance;
