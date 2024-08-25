import React, { useRef } from 'react';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import profileItems from '../constants/profileItems';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Profile() {
  const menu = useRef<Menu>(null);
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const username = 'kullancı name';

  const items = [
    {
      label: username,
      icon: 'pi pi-user',
      command: () => navigate(`/${username}`),
    },
    { separator: true },
    ...profileItems.flat().map((item) => ({
      label: item.label,
      icon: item.icon,
      command: () => {
        if (item.path) {
          navigate(item.path);
        }
      },
    })),
    { separator: true },
    {
      label: 'Language',
      icon: 'pi pi-language',
      items: [
        {
          label: 'English',
          command: () => i18n.changeLanguage('en'),
        },
        {
          label: 'Türkçe',
          command: () => i18n.changeLanguage('tr'),
        },
      ],
    },
  ];

  return (
    <div>
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        size="large"
        onClick={(e) => menu.current?.toggle(e)}
        style={{ cursor: 'pointer' }}
        shape="circle"
      />
      <Menu
        className="custom-menu bg-main-850 border border-secondary-350 rounded-lg text-main-300"
        model={items}
        popup
        ref={menu}
      />
    </div>
  );
}

export default Profile;
