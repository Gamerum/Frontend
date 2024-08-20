import React from 'react';
import { getPostUrl } from '../../utils/urlUtils';
import { PostCardFooterProps } from '../../types/Post';
import { formatNumber } from '../../utils/numberFormatter';
import { Button } from 'primereact/button';

const PostCardFooter: React.FC<PostCardFooterProps> = ({
  id,
  commentCount,
  likeCount,
}) => {
  return (
    <div className="post-footer">
      <div className="post-footer-left">
        <Button
          icon="pi pi-share-alt"
          className="p-button-text p-button-plain"
        />
        <a href={getPostUrl(id)} className="post-comment-link">
          <Button
            icon="pi pi-comment"
            className="p-button-text p-button-plain"
            label={formatNumber(commentCount)}
          />
        </a>
      </div>
      <div className="post-footer-right">
        <Button
          icon="pi pi-thumbs-up"
          className="p-button-text p-button-plain"
          label={formatNumber(likeCount)}
        />
      </div>
    </div>
  );
};

export default PostCardFooter;
