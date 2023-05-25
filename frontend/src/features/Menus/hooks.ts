import { pagesPath } from '@/utils/$path';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

type TUseHandlerArgs = {
  shopId: string;
};

export const useHandler = ({ shopId }: TUseHandlerArgs) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.push(pagesPath.shops._id(shopId).$url());
  }, [router]);

  return { handleBack };
};
