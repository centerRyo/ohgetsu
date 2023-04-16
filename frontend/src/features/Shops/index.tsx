import {
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
import styles from './index.module.scss';

const Shops = memo(() => {
  return (
    <div className={styles.container}>
      <SimpleGrid
        spacing={2}
        templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
      >
        <Link href=''>
          <a>
            <Card>
              <CardBody>
                <Image src='/images/no_image.png' fit='fill' />
                <Heading size='md'>ちゃぶとん 横浜店</Heading>
                <span className={styles.genre}>ラーメン</span>
                <Text mt={4}>神奈川県横浜市</Text>
              </CardBody>
            </Card>
          </a>
        </Link>
      </SimpleGrid>
    </div>
  );
});
Shops.displayName = 'Shops';

export default Shops;
