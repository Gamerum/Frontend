import React from 'react';
import Header from './layout/Header';
import { Link } from 'react-router-dom';
import PostCard from './components/post/PostCard';
import { defaultPostCardProps } from './types/Post';

function App() {
  return (
    <div className="bg-main-800 min-h-screen">
      <Header />
      <PostCard {...defaultPostCardProps} />
      <div className="container py-4 md:py-8">
        <Link to={'/deneme'} className="text-main-550">
          Welcome
        </Link>
      </div>
    </div>
  );
}

export default App;
