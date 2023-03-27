import {
  FormControl,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  Input as ChakraInput,
} from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = Partial<{
  isRequired: boolean;
  helper: string;
}> & {
  label: string;
  type: string;
  name: string;
} & FormLabelProps;

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
