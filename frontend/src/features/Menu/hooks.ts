import { pagesPath } from '@/utils/$path';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { MenusSearchCondition } from '../Menus/utils';

type TUseHandlerArgs = {
  searchCondition: MenusSearchCondition;
};

export const useHandler = ({ searchCondition }: TUseHandlerArgs) => {
  const router = useRouter();

  const handleBack = useCallback(
    () => router.push(pagesPath.menus.$url({ query: { ...searchCondition } })),
    [router, searchCondition]
  );

  const handleSearchMenus = useCallback(
    () => router.push(pagesPath.shops._id(searchCondition.shopId).$url()),
    [router, searchCondition.shopId]
  );

  const handleSearchShop = useCallback(() => router.push('/'), [router]);

  return { handleBack, handleSearchMenus, handleSearchShop };
};
