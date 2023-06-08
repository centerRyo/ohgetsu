import { useRegisterShopPageShopCreateMutation } from '@/graphql/generated';
import { useToast } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { UseFormReset } from 'react-hook-form';
import { FormValues, PreviewType } from './index.d';

type TUseHandlerArgs = {
  preview: PreviewType;
  setPreview: (preview: PreviewType) => void;
  reset: UseFormReset<FormValues>;
};

export const useHandler = ({ preview, setPreview, reset }: TUseHandlerArgs) => {
  const toast = useToast();
  const [register] = useRegisterShopPageShopCreateMutation();

  const handleSubmit = useCallback(
    async (values: FormValues) => {
      try {
        const { errors } = await register({
          variables: {
            input: {
              ...values,
              pic: values.pic ? values?.pic[0] : undefined,
              menus: {
                create: values.menus.map((menu) => {
                  return {
                    name: menu.name,
                    pic: menu.pic ? menu.pic[0] : undefined,
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

        reset();
        setPreview({ pic: undefined, 'menus.0.pic': undefined });

        toast({
          title: 'お店情報を登録しました',
          status: 'success',
          isClosable: true,
        });
      } catch (error) {
        console.error(error);

        toast({
          title: 'お店情報を登録できませんでした',
          status: 'error',
          isClosable: true,
        });
      }
    },
    [register, toast]
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
