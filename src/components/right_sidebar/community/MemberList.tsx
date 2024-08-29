import React, { useRef } from 'react';
import { Avatar } from 'primereact/avatar';
import { Card } from 'primereact/card';
import { ContextMenu } from 'primereact/contextmenu';
import { useTranslation } from 'react-i18next';

interface CommunityMember {
  id: string;
  pp: string;
  nickname: string;
  role: string;
}

interface MemberListProps {
  members: CommunityMember[];
}

const MemberList: React.FC<MemberListProps> = ({ members }) => {
  const { t } = useTranslation();
  const cm = useRef<ContextMenu>(null);

  const items = [
    {
      label: 'View Profile',
      icon: 'pi pi-user',
      command: () => {
        console.log('View Profile clicked');
      },
    },
    {
      label: 'Send Message',
      icon: 'pi pi-envelope',
      command: () => {
        console.log('Send Message clicked');
      },
    },
    {
      label: 'Report',
      icon: 'pi pi-exclamation-triangle',
      command: () => {
        console.log('Report clicked');
      },
    },
  ];

  return (
    <>
      <Card className="shadow-md text-white bg-transparent">
        <h2 className="text-xl font-bold mb-3 text-left border-b-2 border-blue-600">
          {t('members')}
        </h2>
        <ul className="space-y-4 overflow-y-auto max-h-52 scrollbar scrollbar-thumb-gray-600 scrollbar-track-transparent scrollbar-thumb-rounded-full">
          {members.map((member) => (
            <li
              key={member.id}
              onContextMenu={(e) => {
                e.preventDefault();
                if (cm.current) {
                  cm.current.show(e);
                }
              }}
              className="flex items-center justify-between p-4 border-b border-main-200 shadow-xl bg-main-800"
            >
              <Avatar
                image={member.pp}
                size="normal"
                shape="circle"
                className="mr-4"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold">{member.nickname}</p>
              </div>
              <div className="rounded-lg bg-zinc-800 p-1">
                <p className="text-xs text-main-200">
                  {t('roles.' + member.role)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Card>
      <ContextMenu model={items} ref={cm} className="" />
    </>
  );
};

export default MemberList;
