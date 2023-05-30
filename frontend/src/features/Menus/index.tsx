import { useMenusPageQuery } from '@/graphql/generated';
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
  Spinner,
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
  const excludedIngredientIds = searchCondition.excludedIngredientIds
    ? searchCondition.excludedIngredientIds?.split(',')
    : [];

  const { data, loading } = useMenusPageQuery({
    variables: {
      shop_id: searchCondition.shopId,
      excluded_ingredient_ids: excludedIngredientIds,
    },
  });

  const shop = data?.shop;

  const ingredients = data?.included_ingredients || [];

  const menus = data?.menus || [];

  const { handleBack } = useHandler({
    shopId: searchCondition.shopId,
  });

  return !loading ? (
    <div className={styles.container}>
      <Heading mb={8}>{shop?.name}</Heading>

      <Text mb={8}>メニューを選択してください。</Text>

      {ingredients.length > 0 && (
        <Flex
          className={styles.subtitle}
          alignItems='center'
          flexWrap='wrap'
          mb={8}
        >
          <Flex gap={2} alignItems='center' flexWrap='wrap'>
            {ingredients.map((ingredient) => (
              <span className={styles.ingredient} key={ingredient.id}>
                {ingredient.name}
              </span>
            ))}
          </Flex>
          <Text fontWeight='bold' ml={2}>
            が含まれないメニュー
          </Text>
        </Flex>
      )}

      <section className={styles.menus}>
        {menus.length > 0 ? (
          <SimpleGrid
            spacing={4}
            templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
          >
            {menus.map((menu) => (
              <Link href='' key={menu.id}>
                <a>
                  <Card>
                    <CardHeader>
                      <Box className={styles.imageWrap}>
                        <Image
                          src={
                            menu?.pic
                              ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${menu?.pic}`
                              : '/images/no_image.png'
                          }
                          fit='fill'
                          objectFit='cover'
                          borderRadius='md'
                        />
                      </Box>
                    </CardHeader>
                    <CardBody>
                      <Heading size='md' noOfLines={3} height='72px'>
                        {menu.name}
                      </Heading>
                    </CardBody>
                  </Card>
                </a>
              </Link>
            ))}
          </SimpleGrid>
        ) : (
          <Text>メニューがありません。。。</Text>
        )}
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
  ) : (
    <div className={styles.spinnerWrapper}>
      <Spinner
        size='xl'
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='green'
      />
    </div>
  );
});
Menus.displayName = 'Menus';
