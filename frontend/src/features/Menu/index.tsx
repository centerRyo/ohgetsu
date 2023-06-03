import {
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import { MenusSearchCondition } from '../Menus/utils';
import { useHandler } from './hooks';
import styles from './index.module.scss';

type Props = {
  menuId: string;
  searchCondition: MenusSearchCondition;
};

export const Menu: FC<Props> = memo(({ menuId, searchCondition }) => {
  const { handleBack, handleSearchMenus, handleSearchShop } = useHandler({
    searchCondition,
  });

  return (
    <div className={styles.container}>
      <Heading mb={8}>ちゃぶ屋とんこつらぁめん ヨドバシ横浜店</Heading>

      <Flex mb={8} className={styles.subTitle}>
        ちゃぶとんらぁめん
      </Flex>

      <Flex maxWidth='30rem' margin='0 auto' mb={8}>
        <Image src='/images/no_image.png' fit='fill' />
      </Flex>

      <div className={styles.explanation}>
        本商品に含まれているアレルギー物質
      </div>
      <section className={styles.ingredients}>
        <SimpleGrid
          spacing={4}
          templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
        >
          <Flex
            maxW='sm'
            padding='25px 10px'
            flexDir='column'
            alignItems='center'
            gap={4}
            className={styles.ingredient}
          >
            <Image src='/images/no_image.png' fit='fill' />
            <Text fontWeight='bold'>卵</Text>
          </Flex>
        </SimpleGrid>
      </section>

      <Flex justifyContent='center' mb={8}>
        <Button
          size='lg'
          colorScheme='green'
          variant='outline'
          w='336px'
          maxW='100%'
          onClick={handleBack}
        >
          検索結果にもどる
        </Button>
      </Flex>
      <Flex justifyContent='center' mb={8}>
        <Button
          size='lg'
          colorScheme='green'
          variant='outline'
          w='336px'
          maxW='100%'
          onClick={handleSearchMenus}
        >
          アレルギー物質を変更して検索する
        </Button>
      </Flex>
      <Flex justifyContent='center'>
        <Button
          size='lg'
          colorScheme='green'
          variant='outline'
          w='336px'
          maxW='100%'
          onClick={handleSearchShop}
        >
          店舗を再検索する
        </Button>
      </Flex>
    </div>
  );
});
Menu.displayName = 'Menu';
