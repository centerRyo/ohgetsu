import {
  Checkbox as ChakraCheckbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormLabel,
  SkeletonText,
} from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = Partial<{
  isRequired: boolean;
  fontWeight: string;
  isLoading: boolean;
  isDisabled: boolean;
  testPrefix: string;
}> & {
  options: Array<{ name: string; value: string }>;
  name: string;
  label: string;
};

const Checkbox: FC<Props> = memo(
  ({
    name,
    label,
    isRequired,
    testPrefix,
    fontWeight = 'bold',
    isLoading,
    isDisabled,
    options,
  }) => {
    console.log(isLoading);
    return (
      <SkeletonText
        data-testid={testPrefix ? `${testPrefix}-${name}` : name}
        isLoaded={!isLoading}
        skeletonHeight={3}
      >
        <FormControl isRequired={isRequired}>
          <FormLabel fontWeight={fontWeight}>{label}</FormLabel>
          <CheckboxGroup>
            <Flex gap={4}>
              {options.map((option) => (
                <ChakraCheckbox
                  key={option.value}
                  isDisabled={isDisabled}
                  name={option.value}
                >
                  {option.name}
                </ChakraCheckbox>
              ))}
            </Flex>
          </CheckboxGroup>
        </FormControl>
      </SkeletonText>
    );
  }
);
Checkbox.displayName = 'Checkbox';

export default Checkbox;
