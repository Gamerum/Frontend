import React from 'react';
import { getPostUrl } from '../../utils/urlUtils';
import { usePostCard } from '../../contexts/PostCardContext';

const PostCardBody: React.FC<{ titleSize?: string }> = ({ titleSize }) => {
  const post = usePostCard();

  return (
    <div className="post-body ml-2 mr-2">
      <a
        href={getPostUrl(post.id)}
        className={`block mb-2 font-bold text-white ${titleSize || 'text-lg'}`}
      >
        {post.title}
      </a>
      {post.image && (
        <img
          src={post.image}
          alt="Post"
          className="w-full h-auto max-h-96 object-cover mb-2, min-h-20"
        />
      )}
    </div>
  );
};

export default PostCardBody;
