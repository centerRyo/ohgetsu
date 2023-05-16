import { Button, Flex, Heading } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { useHandler } from './hooks';
import { FormValues } from './index.d';
import styles from './index.module.scss';
import Ingredients from './Ingredients';

type Props = {};

const Shop: FC<Props> = memo(({}) => {
  const { register, getValues } = useForm<FormValues>();
  const { handleClickSearch, handleBack } = useHandler({ getValues });

  return (
    <div className={styles.container}>
      <Heading mb={8}>ちゃぶとんとんこつラーメンヨドバシ横浜店</Heading>

      <section className={styles.explanation}>
        <div className={styles.wrapper}>
          <p>アレルギー物質を選択してください</p>
          <p>(複数選択可)</p>
          <p>
            (選択した物質を
            <span className={styles.unused}>使用していない</span>
            メニューが表示されます)
          </p>
        </div>
      </section>

      <Ingredients register={register} />

      <Flex justifyContent='center'>
        <Button
          size='lg'
          colorScheme='green'
          width='100%'
          maxWidth='30rem'
          onClick={handleClickSearch}
        >
          検索
        </Button>
      </Flex>
      <Flex justifyContent='center' mt={8}>
        <Button
          size='lg'
          colorScheme='green'
          variant='outline'
          width='100%'
          maxWidth='30rem'
          onClick={handleBack}
        >
          店舗を再検索する
        </Button>
      </Flex>
    </div>
  );
});
Shop.displayName = 'Shop';

export default Shop;
