import { Flex, FormControl, Input, SimpleGrid, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { GiWheat } from 'react-icons/gi';
import styles from './index.module.scss';

const Ingredients: FC = memo(() => {
  return (
    <div className={styles.container}>
      <form>
        <SimpleGrid
          spacing={4}
          templateColumns='repeat(auto-fill, minmax(150px, 1fr))'
        >
          <FormControl position='relative'>
            <Input
              visibility='hidden'
              position='absolute'
              type='checkbox'
              id='wheat'
              name='ingredients'
            />
            <Flex
              maxW='sm'
              padding='25px 10px'
              flexDir='column'
              alignItems='center'
              gap={4}
            >
              <GiWheat size='100%' />
              <Text>小麦</Text>
            </Flex>
          </FormControl>
          <Flex
            maxW='sm'
            padding='25px 10px'
            flexDir='column'
            alignItems='center'
            gap={4}
          >
            <GiWheat size='100%' />
            <Text>小麦</Text>
          </Flex>
        </SimpleGrid>
      </form>
    </div>
  );
});
Ingredients.displayName = 'Ingredients';

export default Ingredients;
