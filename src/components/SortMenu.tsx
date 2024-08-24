import React from 'react';
import { getSortOptions } from '../constants/sortOptions';
import { useTranslation } from 'react-i18next';
import { useSort } from '../contexts/SortContext';
import { MenuItem } from 'primereact/menuitem';
import Menu from './Menu';
import { Button } from 'primereact/button';

const SortMenu: React.FC = () => {
  const { t } = useTranslation();
  const { sortOption, setSortOption } = useSort();

  const options: MenuItem[] = getSortOptions(t).map((option) => ({
    command: () => setSortOption(option),
    template: (item, options) => {
      return (
        <Button
          label={option.name}
          type="button"
          className={`w-full p-2 text-left text-white transition-colors duration-200 ease-in-out rounded-none bg-zinc-800 border-b-2 border-main-800`}
          onClick={options.onClick}
        ></Button>
      );
    },
  }));

  return (
    <Menu
      menuItems={options}
      buttonProps={{
        label: sortOption.name,
        className:
          'focus:ring-0 text-lg p-3 rounded-none bg-zinc-800 text-white min-w-24',
      }}
      menuProps={{
        popup: true,
        className: 'w-36 shadow-lg p-0 mt-[0.1rem]',
        popupAlignment: 'right',
      }}
    ></Menu>
  );
};

export default SortMenu;
