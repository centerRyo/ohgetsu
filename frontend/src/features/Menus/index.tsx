import {
  Box,
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
import { memo } from 'react';
import styles from './index.module.scss';

export const Menus = memo(() => {
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
    </div>
  );
});
Menus.displayName = 'Menus';
