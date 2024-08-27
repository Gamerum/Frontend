import CreatePost from './pages/CreatePost';
import HomePage from './pages/Homepage';
import Header from './layout/Header';

import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="flex flex-col bg-main-800 min-h-screen text-main-250">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
