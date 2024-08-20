import { useSort } from '../../contexts/SortContext';
import SortMenu from '../SortMenu';

const PostCardContainerMenu: React.FC = () => {
  const { sortOption, setSortOption } = useSort();

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };
  return (
    <div className="flex items-center justify-end border-b-0">
      <SortMenu sortOption={sortOption} onSortChange={handleSortChange} />
    </div>
  );
};

export default PostCardContainerMenu;
