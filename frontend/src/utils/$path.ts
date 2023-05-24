import type { OptionalQuery as OptionalQuery0 } from '../pages/menus'

export const pagesPath = {
  "index_test": {
    $url: (url?: { hash?: string }) => ({ pathname: '/index.test' as const, hash: url?.hash })
  },
  "menus": {
    $url: (url?: { query?: OptionalQuery0, hash?: string }) => ({ pathname: '/menus' as const, query: url?.query, hash: url?.hash })
  },
  "register_shop": {
    $url: (url?: { hash?: string }) => ({ pathname: '/register_shop' as const, hash: url?.hash })
  },
  "shops": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/shops/[id]' as const, query: { id }, hash: url?.hash })
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/shops' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
