import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum Category {
  Main = 'MAIN',
  Sub = 'SUB'
}

export type CreateIngredientInput = {
  id: Scalars['String'];
};

export type CreateIngredientsInput = {
  connect?: InputMaybe<Array<Scalars['ID']>>;
};

export type CreateMenuInput = {
  ingredients?: InputMaybe<CreateIngredientsInput>;
  name: Scalars['String'];
  pic?: InputMaybe<Scalars['String']>;
};

export type CreateMenusInput = {
  create: Array<CreateMenuInput>;
};

export type CreateShopInput = {
  address?: InputMaybe<Scalars['String']>;
  genre_id: Scalars['String'];
  menus?: InputMaybe<CreateMenusInput>;
  name: Scalars['String'];
  pic?: InputMaybe<Scalars['String']>;
};

export type GenreType = {
  __typename?: 'GenreType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type IngredientType = {
  __typename?: 'IngredientType';
  category?: Maybe<Category>;
  id: Scalars['ID'];
  name: Scalars['String'];
  pic: Scalars['String'];
};

export type MenuType = {
  __typename?: 'MenuType';
  id: Scalars['ID'];
  ingredients: Array<IngredientType>;
  name: Scalars['String'];
  pic?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createShop: ShopType;
};


export type MutationCreateShopArgs = {
  input: CreateShopInput;
};

export type Query = {
  __typename?: 'Query';
  genres: Array<GenreType>;
  included_ingredients: Array<IngredientType>;
  ingredients: Array<IngredientType>;
  menus: Array<MenuType>;
  shop: ShopType;
  shops: Array<ShopType>;
};


export type QueryIncluded_IngredientsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type QueryMenusArgs = {
  excluded_ingredient_ids: Array<InputMaybe<Scalars['ID']>>;
  shop_id: Scalars['ID'];
};


export type QueryShopArgs = {
  id: Scalars['ID'];
};

export type ShopType = {
  __typename?: 'ShopType';
  address?: Maybe<Scalars['String']>;
  genre?: Maybe<GenreType>;
  id: Scalars['ID'];
  menus: Array<MenuType>;
  name: Scalars['String'];
  pic?: Maybe<Scalars['String']>;
};

export type MenusPageQueryVariables = Exact<{
  shop_id: Scalars['ID'];
  excluded_ingredient_ids: Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>;
}>;


export type MenusPageQuery = { __typename?: 'Query', menus: Array<{ __typename?: 'MenuType', id: string, name: string, pic?: string | null }>, shop: { __typename?: 'ShopType', id: string, name: string }, included_ingredients: Array<{ __typename?: 'IngredientType', id: string, name: string }> };

export type RegisterShopGenresQueryVariables = Exact<{ [key: string]: never; }>;


export type RegisterShopGenresQuery = { __typename?: 'Query', genres: Array<{ __typename?: 'GenreType', id: string, name: string }> };

export type RegisterShopIngredientsQueryVariables = Exact<{ [key: string]: never; }>;


export type RegisterShopIngredientsQuery = { __typename?: 'Query', ingredients: Array<{ __typename?: 'IngredientType', id: string, name: string }> };

export type RegisterShopPageShopCreateMutationVariables = Exact<{
  input: CreateShopInput;
}>;


export type RegisterShopPageShopCreateMutation = { __typename?: 'Mutation', createShop: { __typename?: 'ShopType', id: string, name: string, pic?: string | null, address?: string | null, genre?: { __typename?: 'GenreType', id: string, name: string } | null, menus: Array<{ __typename?: 'MenuType', id: string, name: string, pic?: string | null, ingredients: Array<{ __typename?: 'IngredientType', id: string, name: string }> }> } };

export type ShopPageIngredientsQueryVariables = Exact<{ [key: string]: never; }>;


export type ShopPageIngredientsQuery = { __typename?: 'Query', ingredients: Array<{ __typename?: 'IngredientType', id: string, name: string, pic: string }> };

export type ShopPageQueryVariables = Exact<{
  shop_id: Scalars['ID'];
}>;


export type ShopPageQuery = { __typename?: 'Query', shop: { __typename?: 'ShopType', id: string, name: string } };

export type ShopsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ShopsPageQuery = { __typename?: 'Query', shops: Array<{ __typename?: 'ShopType', id: string, name: string, address?: string | null, pic?: string | null, genre?: { __typename?: 'GenreType', id: string, name: string } | null }> };


export const MenusPageDocument = gql`
    query MenusPage($shop_id: ID!, $excluded_ingredient_ids: [ID]!) {
  menus(shop_id: $shop_id, excluded_ingredient_ids: $excluded_ingredient_ids) {
    id
    name
    pic
  }
  shop(id: $shop_id) {
    id
    name
  }
  included_ingredients(ids: $excluded_ingredient_ids) {
    id
    name
  }
}
    `;

/**
 * __useMenusPageQuery__
 *
 * To run a query within a React component, call `useMenusPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenusPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenusPageQuery({
 *   variables: {
 *      shop_id: // value for 'shop_id'
 *      excluded_ingredient_ids: // value for 'excluded_ingredient_ids'
 *   },
 * });
 */
export function useMenusPageQuery(baseOptions: Apollo.QueryHookOptions<MenusPageQuery, MenusPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MenusPageQuery, MenusPageQueryVariables>(MenusPageDocument, options);
      }
export function useMenusPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MenusPageQuery, MenusPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MenusPageQuery, MenusPageQueryVariables>(MenusPageDocument, options);
        }
export type MenusPageQueryHookResult = ReturnType<typeof useMenusPageQuery>;
export type MenusPageLazyQueryHookResult = ReturnType<typeof useMenusPageLazyQuery>;
export type MenusPageQueryResult = Apollo.QueryResult<MenusPageQuery, MenusPageQueryVariables>;
export const RegisterShopGenresDocument = gql`
    query RegisterShopGenres {
  genres {
    id
    name
  }
}
    `;

/**
 * __useRegisterShopGenresQuery__
 *
 * To run a query within a React component, call `useRegisterShopGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useRegisterShopGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRegisterShopGenresQuery({
 *   variables: {
 *   },
 * });
 */
export function useRegisterShopGenresQuery(baseOptions?: Apollo.QueryHookOptions<RegisterShopGenresQuery, RegisterShopGenresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RegisterShopGenresQuery, RegisterShopGenresQueryVariables>(RegisterShopGenresDocument, options);
      }
export function useRegisterShopGenresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RegisterShopGenresQuery, RegisterShopGenresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RegisterShopGenresQuery, RegisterShopGenresQueryVariables>(RegisterShopGenresDocument, options);
        }
export type RegisterShopGenresQueryHookResult = ReturnType<typeof useRegisterShopGenresQuery>;
export type RegisterShopGenresLazyQueryHookResult = ReturnType<typeof useRegisterShopGenresLazyQuery>;
export type RegisterShopGenresQueryResult = Apollo.QueryResult<RegisterShopGenresQuery, RegisterShopGenresQueryVariables>;
export const RegisterShopIngredientsDocument = gql`
    query RegisterShopIngredients {
  ingredients {
    id
    name
  }
}
    `;

/**
 * __useRegisterShopIngredientsQuery__
 *
 * To run a query within a React component, call `useRegisterShopIngredientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRegisterShopIngredientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRegisterShopIngredientsQuery({
 *   variables: {
 *   },
 * });
 */
export function useRegisterShopIngredientsQuery(baseOptions?: Apollo.QueryHookOptions<RegisterShopIngredientsQuery, RegisterShopIngredientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RegisterShopIngredientsQuery, RegisterShopIngredientsQueryVariables>(RegisterShopIngredientsDocument, options);
      }
export function useRegisterShopIngredientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RegisterShopIngredientsQuery, RegisterShopIngredientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RegisterShopIngredientsQuery, RegisterShopIngredientsQueryVariables>(RegisterShopIngredientsDocument, options);
        }
export type RegisterShopIngredientsQueryHookResult = ReturnType<typeof useRegisterShopIngredientsQuery>;
export type RegisterShopIngredientsLazyQueryHookResult = ReturnType<typeof useRegisterShopIngredientsLazyQuery>;
export type RegisterShopIngredientsQueryResult = Apollo.QueryResult<RegisterShopIngredientsQuery, RegisterShopIngredientsQueryVariables>;
export const RegisterShopPageShopCreateDocument = gql`
    mutation RegisterShopPageShopCreate($input: CreateShopInput!) {
  createShop(input: $input) {
    id
    name
    pic
    address
    genre {
      id
      name
    }
    menus {
      id
      name
      pic
      ingredients {
        id
        name
      }
    }
  }
}
    `;
export type RegisterShopPageShopCreateMutationFn = Apollo.MutationFunction<RegisterShopPageShopCreateMutation, RegisterShopPageShopCreateMutationVariables>;

/**
 * __useRegisterShopPageShopCreateMutation__
 *
 * To run a mutation, you first call `useRegisterShopPageShopCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterShopPageShopCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerShopPageShopCreateMutation, { data, loading, error }] = useRegisterShopPageShopCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterShopPageShopCreateMutation(baseOptions?: Apollo.MutationHookOptions<RegisterShopPageShopCreateMutation, RegisterShopPageShopCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterShopPageShopCreateMutation, RegisterShopPageShopCreateMutationVariables>(RegisterShopPageShopCreateDocument, options);
      }
export type RegisterShopPageShopCreateMutationHookResult = ReturnType<typeof useRegisterShopPageShopCreateMutation>;
export type RegisterShopPageShopCreateMutationResult = Apollo.MutationResult<RegisterShopPageShopCreateMutation>;
export type RegisterShopPageShopCreateMutationOptions = Apollo.BaseMutationOptions<RegisterShopPageShopCreateMutation, RegisterShopPageShopCreateMutationVariables>;
export const ShopPageIngredientsDocument = gql`
    query ShopPageIngredients {
  ingredients {
    id
    name
    pic
  }
}
    `;

/**
 * __useShopPageIngredientsQuery__
 *
 * To run a query within a React component, call `useShopPageIngredientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useShopPageIngredientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShopPageIngredientsQuery({
 *   variables: {
 *   },
 * });
 */
export function useShopPageIngredientsQuery(baseOptions?: Apollo.QueryHookOptions<ShopPageIngredientsQuery, ShopPageIngredientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShopPageIngredientsQuery, ShopPageIngredientsQueryVariables>(ShopPageIngredientsDocument, options);
      }
export function useShopPageIngredientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShopPageIngredientsQuery, ShopPageIngredientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShopPageIngredientsQuery, ShopPageIngredientsQueryVariables>(ShopPageIngredientsDocument, options);
        }
export type ShopPageIngredientsQueryHookResult = ReturnType<typeof useShopPageIngredientsQuery>;
export type ShopPageIngredientsLazyQueryHookResult = ReturnType<typeof useShopPageIngredientsLazyQuery>;
export type ShopPageIngredientsQueryResult = Apollo.QueryResult<ShopPageIngredientsQuery, ShopPageIngredientsQueryVariables>;
export const ShopPageDocument = gql`
    query ShopPage($shop_id: ID!) {
  shop(id: $shop_id) {
    id
    name
  }
}
    `;

/**
 * __useShopPageQuery__
 *
 * To run a query within a React component, call `useShopPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useShopPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShopPageQuery({
 *   variables: {
 *      shop_id: // value for 'shop_id'
 *   },
 * });
 */
export function useShopPageQuery(baseOptions: Apollo.QueryHookOptions<ShopPageQuery, ShopPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShopPageQuery, ShopPageQueryVariables>(ShopPageDocument, options);
      }
export function useShopPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShopPageQuery, ShopPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShopPageQuery, ShopPageQueryVariables>(ShopPageDocument, options);
        }
export type ShopPageQueryHookResult = ReturnType<typeof useShopPageQuery>;
export type ShopPageLazyQueryHookResult = ReturnType<typeof useShopPageLazyQuery>;
export type ShopPageQueryResult = Apollo.QueryResult<ShopPageQuery, ShopPageQueryVariables>;
export const ShopsPageDocument = gql`
    query ShopsPage {
  shops {
    id
    name
    address
    pic
    genre {
      id
      name
    }
  }
}
    `;

/**
 * __useShopsPageQuery__
 *
 * To run a query within a React component, call `useShopsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useShopsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShopsPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useShopsPageQuery(baseOptions?: Apollo.QueryHookOptions<ShopsPageQuery, ShopsPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShopsPageQuery, ShopsPageQueryVariables>(ShopsPageDocument, options);
      }
export function useShopsPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShopsPageQuery, ShopsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShopsPageQuery, ShopsPageQueryVariables>(ShopsPageDocument, options);
        }
export type ShopsPageQueryHookResult = ReturnType<typeof useShopsPageQuery>;
export type ShopsPageLazyQueryHookResult = ReturnType<typeof useShopsPageLazyQuery>;
export type ShopsPageQueryResult = Apollo.QueryResult<ShopsPageQuery, ShopsPageQueryVariables>;