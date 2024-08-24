import default_profile_picture from '../assets/default_profile_picture.jpg';

interface Writer {
  id: string;
  profilePhoto: string;
  nickname: string;
}

interface Community {
  id: string;
  title: string;
}

export interface PostCardHeaderProps {
  writer: Writer;
  community: Community;
  createdAt: number;
}

export interface PostCardBodyProps {
  id: string;
  title: string;
  image?: string;
}

export interface PostCardFooterProps {
  id: string;
  commentCount: number;
  likeCount: number;
}

export interface PostCardProps {
  id: string;
  title: string;
  image?: string;
  commentCount: number;
  likeCount: number;
  writer: Writer;
  community: Community;
  createdAt: number;
}

export interface PostCardContainerProps {
  postCards: PostCardProps[];
}

// Default values
const defaultWriter: Writer = {
  id: '0',
  profilePhoto: default_profile_picture,
  nickname: 'Unknown',
};

const defaultCommunity: Community = {
  id: '0',
  title: 'No Community',
};

export const defaultPostCardProps: PostCardProps = {
  id: '0',
  title: 'Untitled Post',
  image: '',
  commentCount: 0,
  likeCount: 0,
  writer: defaultWriter,
  community: defaultCommunity,
  createdAt: Date.now(),
};
