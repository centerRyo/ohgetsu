import { useCallback } from 'react';

export const useHandler = () => {
  const handleSubmit = useCallback((values: any) => {
    console.log(values);
  }, []);

  return { handleSubmit };
};
