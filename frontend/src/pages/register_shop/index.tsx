import Checkbox from '@/components/checkbox';
import Input from '@/components/input';
import Select from '@/components/select';
import { useIngredientsQuery } from '@/graphql/generated';
import { useCustomOptions } from '@/hooks/useOptions';
import { Button, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { memo } from 'react';
import styles from './index.module.scss';

const RegisterShopPage: NextPage = memo(() => {
  const { data, error, loading } = useIngredientsQuery();

  const ingredients = data?.ingredients || [];

  const options = useCustomOptions({
    items: ingredients,
    getLabel: (item) => item.name,
    ignoreDefault: true,
  });

  return (
    <div className={styles.container}>
      <Flex mb={4}>
        <Input name='name' label='店名' type='text' isRequired />
      </Flex>
      <Flex mb={4}>
        <Input
          name='address'
          label='住所'
          type='text'
          isRequired
          helper='東京都千代田区丸の内１丁目'
        />
      </Flex>
      <Flex mb={4}>
        <Input name='pic' label='お店の写真' type='file' />
      </Flex>
      <Flex mb={4}>
        <Select
          name='genre_id'
          label='ジャンル'
          options={[
            { id: 1, value: 'a' },
            { id: 2, value: 'b' },
          ]}
          placeholder='ジャンルを選択してください'
          isRequired
        />
      </Flex>
      <Flex mb={4}>
        <Input name='menu_name' label='メニュー' type='text' isRequired />
      </Flex>
      <Flex mb={4}>
        <Checkbox
          name='ingredients'
          label='アレルギー物質'
          options={options}
          isRequired
          isLoading={loading}
        />
      </Flex>
      <Flex mb={8}>
        <Input name='menu_pic' label='写真' type='file' />
      </Flex>

      <Flex justifyContent='flex-end'>
        <Button type='submit' colorScheme='green'>
          登録する
        </Button>
      </Flex>
    </div>
  );
});
RegisterShopPage.displayName = 'RegisterPage';

export default RegisterShopPage;
