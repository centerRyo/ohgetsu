import { useShopPageIngredientsQuery } from '@/graphql/generated';
import { useCustomOptionsWithPic } from '@/hooks/useOptions';
import {
  Flex,
  FormLabel,
  Input,
  SimpleGrid,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FC, memo } from 'react';
import { Control, Controller } from 'react-hook-form';
import { FormValues } from '../index.d';
import styles from './index.module.scss';

type Props = {
  control: Control<FormValues, any>;
};

const Ingredients: FC<Props> = memo(({ control }) => {
  const { data, loading } = useShopPageIngredientsQuery();
  const ingredients = data?.ingredients || [];

  const options = useCustomOptionsWithPic({
    items: ingredients,
    getLabel: (item) => item.name,
    ignoreDefault: true,
    getKey: (item) => item.id,
  });

  return (
    <div className={styles.container}>
      <SimpleGrid
        spacing={4}
        templateColumns='repeat(auto-fill, minmax(150px, 1fr))'
      >
        {!loading ? (
          <Controller
            name='ingredients'
            control={control}
            render={() => (
              <>
                {options.map((option) => (
                  <div key={option.key} className={styles.ingredient}>
                    <Input
                      visibility='hidden'
                      position='absolute'
                      type='checkbox'
                      id={option.key}
                      value={option.value}
                      name={option.value}
                      className={styles.checkbox}
                    />
                    <FormLabel htmlFor={option.key} className={styles.label}>
                      <Flex
                        maxW='sm'
                        padding='25px 10px'
                        flexDir='column'
                        alignItems='center'
                        gap={4}
                      >
                        <Image
                          loader={() =>
                            `${process.env.NEXT_PUBLIC_BACKEND_URL}${
                              option?.pic ?? ''
                            }`
                          }
                          unoptimized
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${
                            option?.pic ?? ''
                          }`}
                          alt={option.label}
                          width='100%'
                          height='100%'
                        />
                        <Text fontWeight='bold'>{option.label}</Text>
                      </Flex>
                    </FormLabel>
                  </div>
                ))}
              </>
            )}
          />
        ) : (
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_) => (
            <Skeleton width='165px' height='190px' key={_} />
          ))
        )}
      </SimpleGrid>
    </div>
  );
});
Ingredients.displayName = 'Ingredients';

export default Ingredients;
