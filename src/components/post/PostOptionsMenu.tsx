import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { useTranslation } from 'react-i18next';
import { useScrollableContext } from '../../contexts/ScrollableContext';
import { useMountEffect } from 'primereact/hooks';

const PostOptionsMenu: React.FC = () => {
  const menu = useRef<Menu>(null);
  const { t } = useTranslation();
  const scrollableParentRef = useScrollableContext();

  const handleReport = () => {
    console.log('report');
  };

  useMountEffect(() => {
    const handleScroll = (event: Event) => {
      const menuElement = menu.current?.getElement();

      if (menuElement) {
        menu.current?.hide({
          ...event,
          persist: () => {},
          nativeEvent: event,
        } as unknown as React.SyntheticEvent);
      }
    };

    const scrollableElement = scrollableParentRef?.current;
    if (scrollableElement) {
      scrollableElement.addEventListener('scroll', handleScroll);
    }
  });

  const menuItems: MenuItem[] = [
    {
      command: handleReport,
      template: (item, options) => {
        return (
          <button
            type="button"
            className={`w-full p-2 pl-4 text-left flex items-center text-white transition-colors duration-200 ease-in-out
              bg-red-600 hover:bg-red-700 focus:bg-red-900 focus:outline-none 
              ${options.className}`}
            onClick={options.onClick}
          >
            <i className="pi pi-flag mr-2"></i>
            <span>{t('report')}</span>
          </button>
        );
      },
    },
  ];

  return (
    <>
      <Button
        icon="pi pi-ellipsis-v"
        className="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-0 text-sm"
        aria-label="Options"
        onClick={(event) => menu.current?.toggle(event)}
      />
      <Menu
        model={menuItems}
        popup
        ref={menu}
        className="absolute right-0 w-36 shadow-lg p-0"
      />
    </>
  );
};

export default PostOptionsMenu;
