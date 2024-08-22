import React from 'react';
import { getPostUrl } from '../../utils/urlUtils';
import { PostCardBodyProps } from '../../types/Post';

const PostCardBody: React.FC<PostCardBodyProps> = ({ id, title, image }) => {
  return (
    <div className="post-body p-4">
      <a
        href={getPostUrl(id)}
        className="block text-lg font-bold text-white mb-2"
      >
        {title}
      </a>
      {image && (
        <img
          src={image}
          alt="Post"
          className="w-full h-auto max-h-96 object-cover mb-2, min-h-20"
        />
      )}
    </div>
  );
};

export default PostCardBody;
