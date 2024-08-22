import { Item } from '../types/profileItem';

const profileItems: Item[] = [
  [
    {
      label: 'user@example.com',
      path: '/account',
    },
  ],
  [
    {
      label: 'Settings',
      icon: 'i-heroicons-cog-8-tooth',
      path: '/settings',
    },
  ],
  [
    {
      label: 'Changelog',
      icon: 'i-heroicons-megaphone',
      path: '/changelog',
    },
    {
      label: 'Status',
      icon: 'i-heroicons-signal',
      path: '/status',
    },
  ],
  [
    {
      label: 'Sign out',
      icon: 'i-heroicons-arrow-left-on-rectangle',
      path: '/signout',
    },
  ],
];

export default profileItems;
