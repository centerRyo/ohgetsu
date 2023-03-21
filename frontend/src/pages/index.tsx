import Header from '@/components/header';
import { useIngredientsQuery } from '@/graphql/generated';
import { HStack, Tag } from '@chakra-ui/react';
import type { NextPage } from 'next';

const SamplePage: NextPage = () => {
  const { data } = useIngredientsQuery();
  const ingredients = data?.ingredients || [];
  return (
    <>
      <Header />
      <HStack>
        {ingredients.map((ingredient) => (
          <Tag key={ingredient.id} colorScheme='blue'>
            {ingredient.name}
          </Tag>
        ))}
      </HStack>
    </>
  );
};

export default SamplePage;
