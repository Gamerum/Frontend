import React from 'react';
import SortOptions from '../constants/sortOptions';

interface SortMenuProps {
  sortOption: string;
  onSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SortMenu: React.FC<SortMenuProps> = ({ sortOption, onSortChange }) => {
  return (
    <div className="p-4 shadow-sm mb-4">
      <select
        id="sort"
        value={sortOption}
        onChange={onSortChange}
        className="p-2 border bg-zinc-900 text-white"
      >
        {SortOptions.map((option) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortMenu;
