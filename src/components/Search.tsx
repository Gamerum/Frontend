import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

function Search() {
  const [value, setValue] = useState('');
  console.log('value >>', value);
  return (
    <div className="group w-full bg-main-800 text-main-250 border border-secondary-350 rounded-full focus-within:border-main-550">
      <div className="flex items-center space-x-2 py-2 px-4">
        <i className="pi pi-search text-main-250 group-focus-within:text-main-550"></i>

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
