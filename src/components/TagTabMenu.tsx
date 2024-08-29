import React, { useRef, useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { MenuItem } from 'primereact/menuitem';
import { Button } from 'primereact/button';

interface TagTabMenuProps {
  tags: string[];
  onTagSelect: (tagName: string) => void;
}

const lerp = (start: number, end: number, t: number) => {
  return start * (1 - t) + end * t;
};

const TagTabMenu: React.FC<TagTabMenuProps> = ({ tags, onTagSelect }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  let velocity = 0;
  let isScrolling = false;

  const items: MenuItem[] = tags.map((tag, index) => ({
    command: () => {
      setActiveIndex(index);
      onTagSelect(tag);
    },
    template: (item, options) => (
      <Button
        label={tag}
        type="button"
        className={`px-3 py-2 mr-3 text-md text-left rounded-none border-none  ${
          activeIndex === index
            ? 'text-blue-500 hover:text-blue-400'
            : 'text-gray-400 hover:text-white'
        }`}
        onClick={options.onClick}
      />
    ),
  }));

  const handleWheel = (event: React.WheelEvent) => {
    if (scrollContainerRef.current) {
      velocity += event.deltaY; // Accumulate velocity based on the scroll event
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(smoothScroll);
      }
    }
  };

  const smoothScroll = () => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const targetScroll = scrollContainer.scrollLeft + velocity;
      const newScroll = lerp(scrollContainer.scrollLeft, targetScroll, 0.1);
      scrollContainer.scrollLeft = newScroll;

      // Gradually decrease velocity to simulate friction
      velocity *= 0.9;

      // Stop the scrolling animation when velocity is very low
      if (Math.abs(velocity) > 0.5) {
        requestAnimationFrame(smoothScroll);
      } else {
        isScrolling = false;
        velocity = 0; // Ensure velocity is reset to zero
      }
    }
  };

  return (
    <div
      className="overflow-x-auto scrollbar-hide ml-2 mr-4"
      onWheel={handleWheel}
      ref={scrollContainerRef}
    >
      <div className="flex w-full min-w-max">
        <TabMenu
          model={items}
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
          className="flex-nowrap"
        />
      </div>
    </div>
  );
};

export default TagTabMenu;
