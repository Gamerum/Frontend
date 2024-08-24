import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { useTranslation } from 'react-i18next';

const PostOptionsMenu: React.FC = () => {
  const menu = useRef<Menu>(null);
  const { t } = useTranslation();

  const handleReport = () => {
    console.log('report');
  };

  const menuItems = [
    { label: t('report'), icon: 'pi pi-flag', command: handleReport },
  ];

  return (
    <>
      <Button
        icon="pi pi-ellipsis-v"
        className="p-button-text text-blue-600 focus:outline-none focus:ring-0"
        aria-label="Options"
        onClick={(event) => menu.current?.toggle(event)}
      />
      <Menu model={menuItems} popup ref={menu} />
    </>
  );
};

export default PostOptionsMenu;
