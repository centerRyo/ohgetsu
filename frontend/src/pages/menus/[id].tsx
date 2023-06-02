import { Menu } from '@/features/Menu';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

export type OptionalQuery = {
  shopId: string;
  excludedIngredientIds: string;
};

const MenuPage: NextPage = () => {
  const router = useRouter();

  return <Menu />;
};

export default MenuPage;
