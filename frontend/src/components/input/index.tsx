import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input as ChakraInput,
} from '@chakra-ui/react';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

type Props = ComponentPropsWithoutRef<'input'> &
  Partial<{
    isRequired: boolean;
    helper: string;
    fontWeight: string;
  }> & {
    label: string;
  };

const Input = forwardRef<HTMLInputElement, Props>(
  ({ isRequired, helper, fontWeight, label, type, name }, ref) => {
    return (
      <FormControl isRequired={isRequired}>
        <FormLabel fontWeight={fontWeight}>{label}</FormLabel>
        <ChakraInput id={name} name={name} type={type} ref={ref} />
        {helper && <FormHelperText>{helper}</FormHelperText>}
      </FormControl>
    );
  }
);
Input.displayName = 'Input';

export default Input;
