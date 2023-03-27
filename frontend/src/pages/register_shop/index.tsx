import Input from '@/components/input';
import Select from '@/components/select';
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  Stack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { memo } from 'react';

const RegisterShopPage: NextPage = memo(() => {
  return (
    <div>
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
      <FormControl isRequired>
        <CheckboxGroup>
          <Stack direction={['column', 'row']} spacing='12px'>
            <Checkbox value='egg'>卵</Checkbox>
            <Checkbox value='milk'>乳</Checkbox>
          </Stack>
        </CheckboxGroup>
      </FormControl>
      <Flex mb={4}>
        <Input name='menu_pic' label='写真' type='file' />
      </Flex>

      <Button type='submit' variant='outline'>
        登録する
      </Button>
    </div>
  );
});
RegisterShopPage.displayName = 'RegisterPage';

export default RegisterShopPage;
