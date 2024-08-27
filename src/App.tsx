import CreatePost from './pages/CreatePost';
import HomePage from './pages/Homepage';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePost />} />
    </Routes>
  );
}

export default App;
