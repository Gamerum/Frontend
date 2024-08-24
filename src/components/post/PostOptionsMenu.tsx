import React from 'react';
import { MenuItem } from 'primereact/menuitem';
import { useTranslation } from 'react-i18next';
import Menu from '../Menu';
import { Button } from 'primereact/button';

const PostOptionsMenu: React.FC = () => {
  const { t } = useTranslation();

  const handleReport = () => {
    console.log('report');
  };

  const menuItems: MenuItem[] = [
    {
      command: handleReport,
      template: (item, options) => {
        return (
          <Button
            icon="pi pi-flag mr-2"
            label={t('report')}
            type="button"
            className={`w-full p-2 text-left flex items-center text-white transition-colors duration-200 ease-in-out
              bg-red-600 hover:bg-red-700 focus:bg-red-900 rounded-none`}
            onClick={options.onClick}
          ></Button>
        );
      },
    },
  ];

  return (
    <Menu
      menuItems={menuItems}
      buttonProps={{
        icon: 'pi pi-ellipsis-v',
        className:
          'text-blue-600 hover:text-blue-800 focus:ring-0 text-sm w-5 ml-2',
      }}
      menuProps={{
        popup: true,
        className: 'w-36 shadow-lg p-0 bg-transparent mt-1',
        popupAlignment: 'right',
      }}
    ></Menu>
  );
};

export default PostOptionsMenu;
