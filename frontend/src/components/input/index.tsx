import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input as ChakraInput,
} from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = Partial<{
  isRequired: boolean;
  helper: string;
  fontWeight: string;
}> & {
  label: string;
  type: string;
  name: string;
};

const Input: FC<Props> = memo(
  ({ name, label, type, isRequired, helper, fontWeight = 'bold' }) => {
    return (
      <FormControl isRequired={isRequired}>
        <FormLabel fontWeight={fontWeight}>{label}</FormLabel>
        <ChakraInput name={name} type={type} />
        {helper && <FormHelperText>{helper}</FormHelperText>}
      </FormControl>
    );
  }
);
Input.displayName = 'Input';

export default Input;
