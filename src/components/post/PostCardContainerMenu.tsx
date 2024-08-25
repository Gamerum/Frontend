import SortMenu from '../SortMenu';
import TagTabMenu from '../TagTabMenu';

interface PostCardContainerMenuProps {
  sortMenu?: boolean;
  tagTabMenu?: boolean;
}

const PostCardContainerMenu: React.FC<PostCardContainerMenuProps> = ({
  sortMenu = false,
  tagTabMenu = false,
}) => {
  const tags = ['All', 'Adventure', 'Strategy', 'Action'];

  const handleTagSelect = (tagName: string) => {
    console.log(`Selected tag: ${tagName}`);
  };

  return (
    <div className="flex items-center justify-between mb-4">
      {tagTabMenu && <TagTabMenu tags={tags} onTagSelect={handleTagSelect} />}
      {sortMenu && <SortMenu />}
    </div>
  );
};

export default PostCardContainerMenu;
