import {
  FormControl,
  FormLabel,
  Select as ChakraSelect,
} from '@chakra-ui/react';
import { memo } from 'react';

type Props = Partial<{
  isRequired: boolean;
  fontWeight: string;
  placeholder: string;
}> & {
  name: string;
  label: string;
  options: Array<{ id: number; value: string }>;
};

const Select = memo(
  ({
    name,
    label,
    options,
    isRequired,
    placeholder,
    fontWeight = 'bold',
  }: Props) => {
    return (
      <FormControl isRequired={isRequired}>
        <FormLabel fontWeight={fontWeight}>{label}</FormLabel>
        <ChakraSelect name={name} placeholder={placeholder}>
          {options.map((option) => (
            <option key={option.id}>{option.value}</option>
          ))}
        </ChakraSelect>
      </FormControl>
    );
  }
);
Select.displayName = 'Select';

export default Select;
