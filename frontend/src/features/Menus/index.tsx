import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FC, memo } from 'react';
import { useHandler } from './hooks';
import styles from './index.module.scss';
import { MenusSearchCondition } from './utils';

type Props = {
  searchCondition: MenusSearchCondition;
};

export const Menus: FC<Props> = memo(({ searchCondition }) => {
  const { handleBack } = useHandler({
    shopId: searchCondition.shopId,
  });

  return (
    <div className={styles.container}>
      <Heading mb={8}>
        ちゃぶ屋とんこつらぁ麺ＣＨＡＢＵＴＯＮ ヨドバシ横浜店
      </Heading>

      <Text mb={8}>メニューを選択してください。</Text>

      <Flex
        className={styles.subtitle}
        alignItems='center'
        flexWrap='wrap'
        mb={8}
      >
        <span className={styles.ingredient}>卵</span>
        <Text fontWeight='bold' ml={2}>
          が含まれないメニュー
        </Text>
      </Flex>

      <section className={styles.menus}>
        <SimpleGrid
          spacing={4}
          templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
        >
          <Link href=''>
            <a>
              <Card>
                <CardHeader>
                  <Box className={styles.imageWrap}>
                    <Image
                      src='/images/no_image.png'
                      fit='fill'
                      objectFit='cover'
                      borderRadius='md'
                    />
                  </Box>
                </CardHeader>
                <CardBody>
                  <Heading size='md' noOfLines={3} height='72px'>
                    鉄板ちゃぶ飯 ガーリック海老チャーハン味
                  </Heading>
                </CardBody>
              </Card>
            </a>
          </Link>
        </SimpleGrid>
      </section>

      <Flex justifyContent='center'>
        <Button
          size='lg'
          colorScheme='green'
          variant='outline'
          onClick={handleBack}
        >
          アレルギー物質を変更して検索する
        </Button>
      </Flex>
    </div>
  );
});
Menus.displayName = 'Menus';
