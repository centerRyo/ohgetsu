import { Menu } from '@/features/Menu';
import {
  CreateMenusSearchCondition,
  MenusSearchCondition,
} from '@/features/Menus/utils';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

export type OptionalQuery = MenusSearchCondition;

const MenuPage: NextPage = () => {
  const router = useRouter();

  const { id } = router.query;
  const searchCondition = CreateMenusSearchCondition(router.query);

  return <Menu menuId={id as string} searchCondition={searchCondition} />;
};

export default MenuPage;
