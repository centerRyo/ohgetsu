import {
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Stack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { memo } from 'react';

const RegisterShopPage: NextPage = memo(() => {
  return (
    <div>
      <FormControl isRequired>
        <FormLabel fontWeight='bold'>店名</FormLabel>
        <Input type='text' />
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontWeight='bold'>住所</FormLabel>
        <Input type='text' />
        <FormHelperText>東京都千代田区丸の内１丁目</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel fontWeight='bold'>お店の写真</FormLabel>
        <Input type='file' />
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontWeight='bold'>ジャンル</FormLabel>
        <Select placeholder='ジャンルを選択してください'>
          <option>a</option>
          <option>b</option>
        </Select>
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontWeight='bold'>メニュー</FormLabel>
        <Input type='text' />
        <CheckboxGroup>
          <Stack direction={['column', 'row']} spacing='12px'>
            <Checkbox value='egg'>卵</Checkbox>
            <Checkbox value='milk'>乳</Checkbox>
          </Stack>
        </CheckboxGroup>
        <FormLabel fontWeight='bold'>写真</FormLabel>
        <Input type='file' />
      </FormControl>

      <Button type='submit' variant='outline'>
        登録する
      </Button>
    </div>
  );
});
RegisterShopPage.displayName = 'RegisterPage';

export default RegisterShopPage;
