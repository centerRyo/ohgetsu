import type { OptionalQuery as OptionalQuery0 } from '../pages/menus';
import type { OptionalQuery as OptionalQuery1 } from '../pages/menus/[id]';

export const pagesPath = {
  menus: {
    _id: (id: string | number) => ({
      $url: (url?: { query?: OptionalQuery1; hash?: string }) => ({
        pathname: '/menus/[id]' as const,
        query: { id, ...url?.query },
        hash: url?.hash,
      }),
    }),
    $url: (url?: { query?: OptionalQuery0; hash?: string }) => ({
      pathname: '/menus' as const,
      query: url?.query,
      hash: url?.hash,
    }),
  },
  register_shop: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/register_shop' as const,
      hash: url?.hash,
    }),
  },
  shops: {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({
        pathname: '/shops/[id]' as const,
        query: { id },
        hash: url?.hash,
      }),
    }),
    $url: (url?: { hash?: string }) => ({
      pathname: '/shops' as const,
      hash: url?.hash,
    }),
  },
  $url: (url?: { hash?: string }) => ({
    pathname: '/' as const,
    hash: url?.hash,
  }),
};

export type PagesPath = typeof pagesPath;
