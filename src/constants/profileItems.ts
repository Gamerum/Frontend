import { Item } from '../types/profileItem';

const profileItems: Item[] = [
  [
    {
      label: 'Settings',
      icon: 'pi pi-cog ',
      path: '/settings',
    },
    {
      label: 'Sign out',
      icon: 'pi pi-sign-out',
      path: '/signout',
    },
  ],
];

export default profileItems;
