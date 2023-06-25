import { Spinner as ChakraSpinner } from '@chakra-ui/react';
import { memo } from 'react';
import styles from './index.module.scss';

type Props = Partial<{
  size: string;
  thickness: string;
  speed: string;
  color: string;
}>;

export const Spinner = memo(
  ({ size = 'xl', thickness = '4px', speed = '0.65s', color }: Props) => (
    <div className={styles.container}>
      <ChakraSpinner
        size={size}
        thickness={thickness}
        speed={speed}
        emptyColor='gray.200'
        color={color}
      />
    </div>
  )
);
Spinner.displayName = 'Spinner';
