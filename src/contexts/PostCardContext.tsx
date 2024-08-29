import { createContext, useContext } from 'react';
import default_profile_picture from '../assets/default_profile_picture.jpg';

export interface PostCardProps {
  id: string;
  title: string;
  image?: string;
  commentCount: number;
  likeCount: number;
  tag: string;
  writer: {
    id: string;
    profilePhoto: string;
    nickname: string;
  };
  community: {
    id: string;
    title: string;
  };
  createdAt: number;
}

export const defaultPostCardProps: PostCardProps = {
  id: '0',
  title: 'Untitled Post',
  image: '',
  commentCount: 0,
  likeCount: 0,
  tag: 'tag',
  writer: {
    id: '0',
    profilePhoto: default_profile_picture,
    nickname: 'Unknown',
  },
  community: {
    id: '0',
    title: 'No Community',
  },
  createdAt: Date.now(),
};

const PostCardContext = createContext<PostCardProps | undefined>(undefined);

export const PostCardProvider = PostCardContext.Provider;

export const usePostCard = () => {
  const context = useContext(PostCardContext);
  if (!context) {
    throw new Error('usePost must be used within a PostCardProvider');
  }
  return context;
};
