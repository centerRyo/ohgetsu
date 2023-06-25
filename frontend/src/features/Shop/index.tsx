import { useShopPageQuery } from '@/graphql/generated';
import { Button, Flex, Heading, Skeleton } from '@chakra-ui/react';
import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { useHandler } from './hooks';
import { FormValues } from './index.d';
import styles from './index.module.scss';
import Ingredients from './Ingredients';

type Props = {
  shopId: string;
};

const Shop = memo(({ shopId }: Props) => {
  const { data, loading } = useShopPageQuery({
    variables: { shop_id: shopId },
  });

  const shop = data?.shop;

  const { register, getValues } = useForm<FormValues>();
  const { handleClickSearch, handleBack } = useHandler({ getValues, shopId });

  return (
    <div className={styles.container}>
      {!loading ? (
        <Heading mb={8}>{shop?.name}</Heading>
      ) : (
        <Skeleton height='2rem' mb={8} />
      )}

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
