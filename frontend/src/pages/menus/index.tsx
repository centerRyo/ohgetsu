import { Menus } from '@/features/Menus';
import { NextPage } from 'next';

export type OptionalQuery = {
  shop_id: number;
  excluded_ingredient_ids: string;
};

const MenusPage: NextPage = () => {
  return <Menus />;
};

export default MenusPage;
