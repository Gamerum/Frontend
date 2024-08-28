import React from 'react';
import RuleList from '../../components/right_sidebar/community/RuleList';

const RightSidebar: React.FC = () => {
  const rules = [
    'Be respectful',
    'No spamming',
    'Follow community guidelines',
    'Be respectful',
    'No spamming',
    'Follow community guidelines',
    'Be respectful',
    'No spamming',
    'Follow community guidelines',
    'No spamming',
  ];

  return (
    <aside className="w-[20rem] bg-zinc-900 h-full flex-col hidden md:flex overflow-visible">
      <RuleList rules={rules} />
    </aside>
  );
};

export default RightSidebar;
