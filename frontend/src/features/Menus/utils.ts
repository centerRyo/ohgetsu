import { getStringParams } from '@/utils/search-util';
import { NextRouter } from 'next/router';

export type MenusSearchCondition = Readonly<
  MenusSearchConditionRequired & MenusSearchConditionOptional
>;

type MenusSearchConditionRequired = Readonly<{
  shopId: string;
}>;

type MenusSearchConditionOptional = Readonly<
  Partial<{
    excludedIngredientIds: string;
  }>
>;

type TCreateMenusSearchCondition = (
  query: NextRouter['query']
) => MenusSearchCondition;

export const CreateMenusSearchCondition: TCreateMenusSearchCondition = (
  query
) => {
  const { shop_id, excluded_ingredient_ids } = query;

  const requiredParams: MenusSearchConditionRequired = {
    shopId: getStringParams(shop_id),
  };

  const optionalParams: MenusSearchConditionOptional = {
    excludedIngredientIds: getStringParams(excluded_ingredient_ids),
  };

  const searchCondition = {
    ...requiredParams,
    ...optionalParams,
  };

  return searchCondition;
};
