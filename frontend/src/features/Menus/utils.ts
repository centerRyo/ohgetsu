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
  const { shopId, excludedIngredientIds } = query;

  const requiredParams: MenusSearchConditionRequired = {
    shopId: getStringParams(shopId),
  };

  const optionalParams: MenusSearchConditionOptional = {
    excludedIngredientIds: getStringParams(excludedIngredientIds),
  };

  const searchCondition = {
    ...requiredParams,
    ...optionalParams,
  };

  return searchCondition;
};
