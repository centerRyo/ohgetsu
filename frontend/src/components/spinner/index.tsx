import { Spinner as ChakraSpinner } from '@chakra-ui/react';
import { FC, memo } from 'react';
import styles from './index.module.scss';

type Props = Partial<{
  size: string;
  thickness: string;
  speed: string;
  color: string;
}>;

export const Spinner: FC<Props> = memo(
  ({ size = 'xl', thickness = '4px', speed = '0.65s', color }) => (
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
