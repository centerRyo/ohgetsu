import { useRegisterShopPageShopCreateMutation } from '@/graphql/generated';
import React, { useCallback } from 'react';
import { FormValues, PreviewType } from './index.d';

type TUseHandlerArgs = {
  preview: PreviewType;
  setPreview: (preview: PreviewType) => void;
};

export const useHandler = ({ preview, setPreview }: TUseHandlerArgs) => {
  const [register] = useRegisterShopPageShopCreateMutation();

  const handleSubmit = useCallback(
    async (values: FormValues) => {
      try {
        const { errors } = await register({
          variables: {
            input: {
              ...values,
              menus: {
                create: values.menus.map((menu) => {
                  return {
                    name: menu.name,
                    pic: menu.pic,
                    ingredients: {
                      connect: menu.ingredients,
                    },
                  };
                }),
              },
            },
          },
          errorPolicy: 'all',
        });

        if (errors) throw errors;
      } catch (error) {
        console.error(error);
      }
    },
    [register]
  );

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;

      if (!files) return;

      const name = e.target.name;

      setPreview({ ...preview, [name]: URL.createObjectURL(files[0]) });
    },
    [preview, setPreview]
  );

  return { handleSubmit, handleFileChange };
};
