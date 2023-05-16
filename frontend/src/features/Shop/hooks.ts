import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { UseFormGetValues } from 'react-hook-form';
import { FormValues } from './index.d';

type TUseHandlerArgs = {
  getValues: UseFormGetValues<FormValues>;
};

export const useHandler = ({ getValues }: TUseHandlerArgs) => {
  const router = useRouter();
  const handleBack = useCallback(() => router.push('/'), [router]);

  const handleClickSearch = useCallback(() => {
    const values = getValues();

    const queryParams = values.ingredients.join(',');
    console.log(queryParams);

    // router.push(`/menus?excluded=${queryParams}`);
  }, [getValues]);

  return { handleClickSearch, handleBack };
};
