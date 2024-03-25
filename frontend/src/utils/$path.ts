import type { OptionalQuery as OptionalQuery_12feomh } from '../pages/menus';
import type { OptionalQuery as OptionalQuery_uf4j7l } from '../pages/menus/[id]';

const buildSuffix = (url?: {query?: Record<string, string>, hash?: string}) => {
  const query = url?.query;
  const hash = url?.hash;
  if (!query && !hash) return '';
  const search = query ? `?${new URLSearchParams(query)}` : '';
  return `${search}${hash ? `#${hash}` : ''}`;
};

export const pagesPath = {
  "menus": {
    _id: (id: string | number) => ({
      $url: (url?: { query?: OptionalQuery_uf4j7l | undefined, hash?: string | undefined } | undefined) => ({ pathname: '/menus/[id]' as const, query: { id, ...url?.query }, hash: url?.hash })
    }),
    $url: (url?: { query?: OptionalQuery_12feomh | undefined, hash?: string | undefined } | undefined) => ({ pathname: '/menus' as const, query: url?.query, hash: url?.hash })
  },
  "register_shop": {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/register_shop' as const, hash: url?.hash })
  },
  "shops": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/shops/[id]' as const, query: { id }, hash: url?.hash })
    }),
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/shops' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/' as const, hash: url?.hash })
};

export type PagesPath = typeof pagesPath;
