import Shop from '@/features/Shop';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const ShopPage: NextPage = () => {
  const router = useRouter();

  const { id } = router.query;

  return <Shop shopId={id as string} />;
};

export default ShopPage;
