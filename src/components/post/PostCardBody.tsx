import React from 'react';
import { getPostUrl } from '../../utils/urlUtils';
import { PostCardBodyProps } from '../../types/Post';

const PostCardBody: React.FC<PostCardBodyProps & { titleSize?: string }> = ({
  id,
  title,
  image,
  titleSize,
}) => {
  return (
    <div className="post-body ml-2 mr-2">
      <a
        href={getPostUrl(id)}
        className={`block mb-2 font-bold text-white ${titleSize || 'text-lg'}`}
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
