import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getPostUrl } from '../../utils/urlUtils';
import { formatNumber } from '../../utils/numberFormatter';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';
import { usePostCard } from '../../contexts/PostCardContext';

const PostCardFooter: React.FC = () => {
  const navigate = useNavigate();
  const post = usePostCard();
  const { t } = useTranslation();

  return (
    <div className="post-footer flex justify-between items-center mr-3">
      <div className="footer-left flex items-center"></div>
      <div className="footer-right flex items-center">
        <Button
          icon="pi pi-share-alt"
          className="p-button-text text-blue-600 focus:outline-none focus:ring-0"
          aria-label="Share"
        />
        <Button
          icon="pi pi-comment"
          className="p-button-text text-blue-600 focus:outline-none focus:ring-0"
          aria-label="Comment"
          onClick={() => navigate(getPostUrl(post.id))}
        />
        <span className="text-gray-500 text-sm">
          {formatNumber(post.commentCount, t)}
        </span>
        <Button
          icon="pi pi-thumbs-up"
          className="p-button-text text-blue-600 ml-2 focus:outline-none focus:ring-0"
          aria-label="Like"
        />
        <span className="text-gray-500 text-sm">
          {formatNumber(post.likeCount, t)}
        </span>
      </div>
    </div>
  );
};

export default PostCardFooter;
