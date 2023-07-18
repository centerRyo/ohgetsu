import { useRegisterShopIngredientsQuery } from '@/graphql/generated';
import { useCustomOptions } from '@/hooks/useOptions';
import {
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  SkeletonText,
} from '@chakra-ui/react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { FormValues } from '../index.d';
import styles from '../index.module.scss';

type Props = {
  errors: FieldErrors<FormValues>;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  control: Control<FormValues, any>;
  index: number;
};

const Ingredients = ({ errors, control, index }: Props) => {
  const { data, loading } = useRegisterShopIngredientsQuery();

  const ingredients = data?.ingredients || [];

  const options = useCustomOptions({
    items: ingredients,
    getLabel: (item) => item.name,
    ignoreDefault: true,
  });

  return (
    <FormControl
      isInvalid={errors.menus && !!errors.menus[index]?.ingredients?.message}
    >
      <Flex mb={2}>
        <FormLabel className={styles.label}>アレルギー情報</FormLabel>
      </Flex>
      <SkeletonText isLoaded={!loading} skeletonHeight={4} spacing='5'>
        <Controller
          name={`menus.${index}.ingredients`}
          control={control}
          render={({ field: { ref, ...rest } }) => (
            // @ts-ignore
            <CheckboxGroup {...rest}>
              <Flex gap={4} wrap='wrap'>
                {options.map((option) => (
                  <Checkbox value={option.value} key={option.key} ref={ref}>
                    {option.label}
                  </Checkbox>
                ))}
              </Flex>
            </CheckboxGroup>
          )}
          rules={{
            validate: {
              atLeastOneRequired: (value) =>
                (value && value.length >= 1) || '1つ以上選択してください',
            },
          }}
        />
      </SkeletonText>
      <FormErrorMessage>
        {errors.menus && errors.menus[index]?.ingredients?.message?.toString()}
      </FormErrorMessage>
    </FormControl>
  );
};

export default Ingredients;
