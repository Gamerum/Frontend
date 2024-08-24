import React from 'react';
import { MenuItem } from 'primereact/menuitem';
import { useTranslation } from 'react-i18next';
import Menu from '../Menu';

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
    <Menu
      menuItems={menuItems}
      buttonProps={{
        icon: 'pi pi-ellipsis-v',
        className:
          'text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-0 text-sm w-1 mr-1 ml-2',
      }}
      menuProps={{
        popup: true,
        className: 'absolute right-0 w-36 shadow-lg p-0',
        popupAlignment: 'right',
      }}
    ></Menu>
  );
};

export default PostOptionsMenu;
