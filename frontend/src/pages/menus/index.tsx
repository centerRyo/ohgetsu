import { Menus } from '@/features/Menus';
import {
  CreateMenusSearchCondition,
  MenusSearchCondition,
} from '@/features/Menus/utils';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

export type OptionalQuery = MenusSearchCondition;

const MenusPage: NextPage = () => {
  const router = useRouter();
  const searchCondition = CreateMenusSearchCondition(router.query);

  return <Menus searchCondition={searchCondition} />;
};

export default MenusPage;
