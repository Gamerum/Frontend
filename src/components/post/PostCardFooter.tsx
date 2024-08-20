import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getPostUrl } from '../../utils/urlUtils';
import { PostCardFooterProps } from '../../types/Post';
import { formatNumber } from '../../utils/numberFormatter';
import { Link } from 'react-router-dom';

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
      <div className="footer-left flex items-center"></div>
      <div className="footer-right flex items-center">
        <i className="pi pi-share-alt text-blue-600 mr-4" aria-label="Share" />
        <Link
          to={getPostUrl(id)}
          className="pi pi-comment text-blue-600 mr-2"
          onClick={handleCommentClick}
        />
        <span className="text-gray-500 text-sm mr-4">
          {formatNumber(commentCount)}
        </span>
        <i className="pi pi-thumbs-up text-blue-600 mr-2" aria-label="Like" />
        <span className="text-gray-500 text-sm">{formatNumber(likeCount)}</span>
      </div>
    </div>
  );
};

export default PostCardFooter;
