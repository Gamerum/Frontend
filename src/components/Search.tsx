import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { InputText } from 'primereact/inputtext';

function Search() {
  const [value, setValue] = useState('');
  console.log('value >>', value);
  return (
    <div className="group w-full bg-main-800 text-main-250 border border-secondary-350 rounded-full focus-within:border-main-550">
      <div className="flex items-center space-x-1 p-1.5">
        <CiSearch
          className="flex-shrink-0 h-6 w-6 text-main-250"
          height={24}
          width={24}
        />

        <InputText
          className="bg-transparent focus:ring-0 w-full focus:outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default Search;
