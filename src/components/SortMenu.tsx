import React from 'react';
import { getSortOptions } from '../constants/sortOptions';
import { useTranslation } from 'react-i18next';

interface SortMenuProps {
  sortOption: string;
  onSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SortMenu: React.FC<SortMenuProps> = ({ sortOption, onSortChange }) => {
  const { t } = useTranslation();
  const options = getSortOptions(t);

  return (
    <div className="p-4 shadow-sm mb-4">
      <select
        id="sort"
        value={sortOption}
        onChange={onSortChange}
        className="p-2 border bg-zinc-900 text-white"
      >
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortMenu;
