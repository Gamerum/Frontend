import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getPostUrl } from '../../utils/urlUtils';
import { PostCardFooterProps } from '../../types/Post';
import { formatNumber } from '../../utils/numberFormatter';
import { Button } from 'primereact/button';

const PostCardFooter: React.FC<PostCardFooterProps> = ({
  id,
  commentCount,
  likeCount,
}) => {
  const navigate = useNavigate();

  const handleCommentClick = () => {
    navigate(getPostUrl(id));
  };

  return (
    <div className="post-footer flex justify-between items-center p-4">
      {/* Footer left */}
      <div className="footer-left flex items-center"></div>
      <div className="footer-right flex items-center">
        <Button
          icon="pi pi-share-alt"
          className="p-button-text text-blue-600"
          aria-label="Share"
        />
        <Button
          icon="pi pi-comment"
          className="p-button-text text-blue-600"
          aria-label="Comment"
          onClick={handleCommentClick}
        />
        <span className="text-gray-500 text-sm">
          {formatNumber(commentCount)}
        </span>
        <Button
          icon="pi pi-thumbs-up"
          className="p-button-text text-blue-600 ml-2"
          aria-label="Like"
        />
        <span className="text-gray-500 text-sm">{formatNumber(likeCount)}</span>
      </div>
    </div>
  );
};

export default PostCardFooter;
