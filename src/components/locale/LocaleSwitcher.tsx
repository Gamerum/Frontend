import React from 'react';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';

const LocaleSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <h2>{t('choose')}</h2>
      <Button
        icon="pi pi-flag-us"
        label={t('english')}
        onClick={() => changeLanguage('en')}
      />
      <Button
        icon="pi pi-flag-tr"
        label={t('turkish')}
        onClick={() => changeLanguage('tr')}
      />
    </div>
  );
};

export default LocaleSwitcher;
