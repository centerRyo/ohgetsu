import { useCallback } from 'react';
import { FormValues } from './index.d';

export const useHandler = () => {
  const handleSubmit = useCallback((values: FormValues) => {
    console.log(values);
  }, []);

  return { handleSubmit };
};
