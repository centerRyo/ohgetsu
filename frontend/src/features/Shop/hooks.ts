import { pagesPath } from '@/utils/$path';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { UseFormGetValues } from 'react-hook-form';
import { FormValues } from './index.d';

type TUseHandlerArgs = {
  getValues: UseFormGetValues<FormValues>;
  shopId: string;
};

export const useHandler = ({ getValues, shopId }: TUseHandlerArgs) => {
  const router = useRouter();
  const handleBack = useCallback(() => router.push('/'), [router]);

  const handleClickSearch = useCallback(() => {
    const values = getValues();

    const queryParams = values.ingredients.join(',');

    router.push(
      pagesPath.menus.$url({
        query: { shop_id: shopId, excluded_ingredient_ids: queryParams },
      })
    );
  }, [getValues]);

  return { handleClickSearch, handleBack };
};
