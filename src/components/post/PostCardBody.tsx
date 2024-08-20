import React from 'react';
import { getPostUrl } from '../../utils/urlUtils';
import { PostCardBodyProps } from '../../types/Post';

const PostCardBody: React.FC<PostCardBodyProps> = ({ id, title, image }) => {
  return (
    <div className="post-body">
      <a href={getPostUrl(id)} className="post-title-link">
        <h2 className="post-title">{title}</h2>
      </a>
      {image && <img src={image} alt="Post" className="post-image" />}
    </div>
  );
};

export default PostCardBody;
