import React, { Suspense, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import Footer from 'components/Footer';

const lngs: any = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
};

const App: React.FC = () => {
  const [count, setCounter] = useState(0);
  const { t, i18n } = useTranslation(); 

  return (
    <>
      <header>
        <div>
          {Object.keys(lngs).map((lng: any) => (
            <button
              key={lng}
              style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
              type="submit"
              onClick={() => {
                i18n.changeLanguage(lng);
                setCounter(count + 1);
              }}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>

        <p>
          <i>{t('counter', { count })}</i>
        </p>

        <p>
          <Trans i18nKey="description.part1">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>

        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {t('description.part2')}
        </a>
      </header>
      <Footer t={t} />
    </>
  );
};

const WrapperApp: React.FC = () => <Suspense fallback="... is loading"><App /></Suspense>

export default WrapperApp;
