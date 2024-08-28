import React from 'react';
import RuleList from '../../components/right_sidebar/community/RuleList';
import MemberList from '../../components/right_sidebar/community/MemberList';

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

  const members = [
    {
      id: '0',
      pp: 'https://example.com/profile1.jpg',
      nickname: 'JohnDoe',
      role: 'Moderator',
    },
    {
      id: '1',
      pp: 'https://example.com/profile2.jpg',
      nickname: 'JaneSmith',
      role: 'Member',
    },
    {
      id: '2',
      pp: 'https://example.com/profile1.jpg',
      nickname: 'JohnDoe',
      role: 'Moderator',
    },
    {
      id: '3',
      pp: 'https://example.com/profile2.jpg',
      nickname: 'JaneSmith',
      role: 'Member',
    },
  ];

  return (
    <aside className="w-[20rem] bg-zinc-900 h-full flex-col hidden md:flex overflow-visible">
      <RuleList rules={rules} />
      <MemberList members={members} />
    </aside>
  );
};

export default RightSidebar;
