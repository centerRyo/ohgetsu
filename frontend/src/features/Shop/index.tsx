import { Heading } from '@chakra-ui/react';
import { FC, memo } from 'react';
import styles from './index.module.scss';
import Ingredients from './Ingredients';

type Props = {};

const Shop: FC<Props> = memo(({}) => {
  return (
    <div className={styles.container}>
      <Heading mb={8}>ちゃぶとんとんこつラーメンヨドバシ横浜店</Heading>

      <section className={styles.explanation}>
        <p>アレルギー物質を選択してください</p>
        <p>(複数選択可)</p>
        <p>
          (選択した物質を<span className={styles.unused}>使用していない</span>
          メニューが表示されます)
        </p>
      </section>

      <Ingredients />
    </div>
  );
});
Shop.displayName = 'Shop';

export default Shop;
