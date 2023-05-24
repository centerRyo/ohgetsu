import { getStringParams } from '@/utils/search-util';
import { NextRouter } from 'next/router';

export type MenusSearchCondition = Readonly<MenusSearchConditionOptional>;

type MenusSearchConditionOptional = Readonly<
  Partial<{
    shop_id: string;
    excluded_ingredient_ids: string;
  }>
>;

type TCreateMenusSearchCondition = (
  query: NextRouter['query']
) => MenusSearchCondition;

export const CreateMenusSearchCondition: TCreateMenusSearchCondition = (
  query
) => {
  const { shop_id, excluded_ingredient_ids } = query;

  const optionalParams: MenusSearchConditionOptional = {
    shop_id: getStringParams(shop_id),
    excluded_ingredient_ids: getStringParams(excluded_ingredient_ids),
  };

  const searchCondition = {
    ...optionalParams,
  };

  return searchCondition;
};
