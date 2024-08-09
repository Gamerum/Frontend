import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Link to={'/deneme'} className="text-3xl text-main-500">
        Welcomes
      </Link>
    </div>
  );
}

export default App;
