import {
  Checkbox as ChakraCheckbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormLabel,
  SkeletonText,
} from '@chakra-ui/react';
import { memo } from 'react';

type Props = Partial<{
  isRequired: boolean;
  fontWeight: string;
  isLoading: boolean;
  isDisabled: boolean;
  testPrefix: string;
}> & {
  options: Array<{ label: string; value: string }>;
  name: string;
  label: string;
};

const Checkbox = memo(
  ({
    name,
    label,
    isRequired,
    testPrefix,
    fontWeight = 'bold',
    isLoading,
    isDisabled,
    options,
  }: Props) => {
    return (
      <FormControl isRequired={isRequired}>
        <FormLabel fontWeight={fontWeight}>{label}</FormLabel>
        <SkeletonText
          data-testid={testPrefix ? `${testPrefix}-${name}` : name}
          isLoaded={!isLoading}
          skeletonHeight={3}
        >
          <CheckboxGroup>
            <Flex gap={4} wrap='wrap'>
              {options.map((option) => (
                <ChakraCheckbox
                  key={option.value}
                  isDisabled={isDisabled}
                  name={option.value}
                >
                  {option.label}
                </ChakraCheckbox>
              ))}
            </Flex>
          </CheckboxGroup>
        </SkeletonText>
      </FormControl>
    );
  }
);
Checkbox.displayName = 'Checkbox';

export default Checkbox;
