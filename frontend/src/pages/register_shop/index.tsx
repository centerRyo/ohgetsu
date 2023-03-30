import { useIngredientsQuery } from '@/graphql/generated';
import { useCustomOptions } from '@/hooks/useOptions';
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  SkeletonText,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { memo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './index.module.scss';

const RegisterShopPage: NextPage = memo(() => {
  const { data, error, loading } = useIngredientsQuery();

  const ingredients = data?.ingredients || [];

  const options = useCustomOptions({
    items: ingredients,
    getLabel: (item) => item.name,
    ignoreDefault: true,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    control,
  } = useForm({ mode: 'all' });

  const onSubmit = (values: any) => console.log(values);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex mb={6}>
          <FormControl isInvalid={!!errors.name?.message}>
            <Flex alignItems='center' gap={4} mb={2}>
              <FormLabel htmlFor='name' className={styles.label}>
                店名
              </FormLabel>
              <span className={styles.required}>必須</span>
            </Flex>
            <Input
              id='name'
              {...register('name', {
                required: '店名は必須です',
              })}
              type='text'
            />
            <FormErrorMessage>
              {errors.name?.message?.toString()}
            </FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex mb={6}>
          <FormControl isInvalid={!!errors.address?.message}>
            <Flex alignItems='center' gap={4} mb={2}>
              <FormLabel htmlFor='address' className={styles.label}>
                住所
              </FormLabel>
              <span className={styles.required}>必須</span>
            </Flex>
            <Input
              id='address'
              type='text'
              {...register('address', { required: '住所は必須です' })}
            />
            <FormHelperText>東京都千代田区丸の内１丁目</FormHelperText>
            <FormErrorMessage>
              {errors.address?.message?.toString()}
            </FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex mb={6}>
          <FormControl>
            <Flex mb={2}>
              <FormLabel htmlFor='file' className={styles.label}>
                お店の写真
              </FormLabel>
            </Flex>
            <Input type='file' {...register('pic')} />
          </FormControl>
        </Flex>
        <Flex mb={6}>
          <FormControl isInvalid={!!errors.genre_id?.message}>
            <Flex alignItems='center' gap={4} mb={2}>
              <FormLabel htmlFor='genre_id' className={styles.label}>
                ジャンル
              </FormLabel>
              <span className={styles.required}>必須</span>
            </Flex>
            <Select
              placeholder='ジャンルを選択してください'
              {...register('genre_id', { required: 'ジャンルは必須です' })}
            >
              <option value='a'>1</option>
              <option value='b'>2</option>
            </Select>
            <FormErrorMessage>
              {errors.genre_id?.message?.toString()}
            </FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex mb={6}>
          <FormControl isInvalid={!!errors.menu_name?.message}>
            <Flex alignItems='center' gap={4} mb={2}>
              <FormLabel className={styles.label} htmlFor='menu_name'>
                メニュー
              </FormLabel>
              <span className={styles.required}>必須</span>
            </Flex>
            <Input
              type='text'
              {...register('menu_name', { required: 'メニューは必須です' })}
            />
            <FormErrorMessage>
              {errors.menu_name?.message?.toString()}
            </FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex mb={6}>
          <FormControl>
            <Flex mb={2}>
              <FormLabel className={styles.label}>アレルギー情報</FormLabel>
            </Flex>
            <SkeletonText isLoaded={!loading} skeletonHeight={4} spacing='5'>
              <Controller
                name='ingredients'
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <CheckboxGroup {...rest}>
                    <Flex gap={4} wrap='wrap'>
                      {options.map((option) => (
                        <Checkbox value={option.value} key={option.key}>
                          {option.label}
                        </Checkbox>
                      ))}
                    </Flex>
                  </CheckboxGroup>
                )}
              />
            </SkeletonText>
          </FormControl>
        </Flex>
        <Flex mb={8}>
          <FormControl>
            <Flex mb={2}>
              <FormLabel className={styles.label}>写真</FormLabel>
            </Flex>
            <Input type='file' {...register('menu_pic')} />
          </FormControl>
        </Flex>

        <Flex justifyContent='flex-end'>
          <Button
            type='submit'
            colorScheme='green'
            isDisabled={!isValid}
            isLoading={isSubmitting}
          >
            登録する
          </Button>
        </Flex>
      </form>
    </div>
  );
});
RegisterShopPage.displayName = 'RegisterPage';

export default RegisterShopPage;
