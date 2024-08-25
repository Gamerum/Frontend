export interface SortOption {
  id: number;
  value: string;
  name: string;
}

export function getSortOptions(t: (key: string) => string) {
  return [
    {
      id: 1,
      value: 'newest',
      name: t('sort_options.newest'),
    },
    {
      id: 2,
      value: 'oldest',
      name: t('sort_options.oldest'),
    },
    {
      id: 3,
      value: 'mostPopular',
      name: t('sort_options.most_popular'),
    },
  ];
}
