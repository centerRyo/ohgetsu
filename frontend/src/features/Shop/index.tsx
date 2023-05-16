import { Button, Flex, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC, memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormValues } from './index.d';
import styles from './index.module.scss';
import Ingredients from './Ingredients';

type Props = {};

const Shop: FC<Props> = memo(({}) => {
  const router = useRouter();

  const handleBack = useCallback(() => router.push('/'), [router]);

  const { handleSubmit, control } = useForm<FormValues>();

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit((values) => console.log(values))}>
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

        <Ingredients control={control} />

        <Flex justifyContent='center'>
          <Button
            size='lg'
            type='submit'
            colorScheme='green'
            width='100%'
            maxWidth='30rem'
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
      </form>
    </div>
  );
});
Shop.displayName = 'Shop';

export default Shop;
