import { useShopsPageQuery } from '@/graphql/generated';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
  Tag,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import styles from './index.module.scss';

const Shops = memo(() => {
  const { data, loading } = useShopsPageQuery();

  const shops = data?.shops || [];

  return (
    <div className={styles.container}>
      <SimpleGrid
        spacing={4}
        templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
      >
        {!loading
          ? shops.map((shop) => (
              <Link href='' key={shop.id}>
                <a>
                  <Card>
                    <CardHeader>
                      <Box className={styles.imageWrap}>
                        <Image
                          src={shop.pic ? shop.pic : '/images/no_image.png'}
                          fit='fill'
                          objectFit='cover'
                          borderRadius='md'
                        />
                      </Box>
                    </CardHeader>
                    <CardBody>
                      <Heading size='md' noOfLines={2} height='48px'>
                        {shop.name}
                      </Heading>
                      <Tag
                        variant='outline'
                        mt={4}
                        color='black'
                        borderColor='#d8d9db'
                        fontWeight='600'
                      >
                        {shop.genre?.name}
                      </Tag>
                      <Flex mt={4} alignItems='baseline'>
                        <HiOutlineLocationMarker className={styles.location} />
                        <Text ml={2} noOfLines={2} height='48px'>
                          {shop.address}
                        </Text>
                      </Flex>
                    </CardBody>
                  </Card>
                </a>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8].map((_) => (
              <Skeleton height='250px' width='200px' key={_} />
            ))}
      </SimpleGrid>
    </div>
  );
});
Shops.displayName = 'Shops';

export default Shops;
