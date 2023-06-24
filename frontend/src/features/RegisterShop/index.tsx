import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import Image from 'next/image';
import { memo, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import Genres from './Genres';
import { useHandler } from './hooks';
import { FormValues, PreviewType } from './index.d';
import styles from './index.module.scss';
import Ingredients from './Ingredients';

const RegisterShop = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    control,
    reset,
  } = useForm<FormValues>({
    mode: 'all',
    defaultValues: {
      name: '',
      address: '',
      pic: undefined,
      genre_id: '',
      menus: [{ name: '', ingredients: [], pic: undefined }],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: 'menus',
  });

  const [preview, setPreview] = useState<PreviewType>({});

  const { handleSubmit: onSubmit, handleFileChange } = useHandler({
    preview,
    setPreview,
    reset,
  });

  const handleAddMenu = () =>
    append([{ name: '', ingredients: [], pic: undefined }]);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex mb={6}>
          <FormControl isInvalid={!!errors.name?.message}>
            <Flex alignItems='center' gap={4} mb={2}>
              <FormLabel htmlFor='name' className={styles.label}>
                店名
              </FormLabel>
              <span className={styles.required}>必須</span>
            </Flex>
            <Input
              id='name'
              {...register('name', {
                required: '店名は必須です',
              })}
              type='text'
            />
            <FormErrorMessage>
              {errors.name?.message?.toString()}
            </FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex mb={6}>
          <FormControl isInvalid={!!errors.address?.message}>
            <Flex alignItems='center' gap={4} mb={2}>
              <FormLabel htmlFor='address' className={styles.label}>
                住所
              </FormLabel>
              <span className={styles.required}>必須</span>
            </Flex>
            <Input
              id='address'
              type='text'
              {...register('address', { required: '住所は必須です' })}
            />
            <FormHelperText>東京都千代田区丸の内１丁目</FormHelperText>
            <FormErrorMessage>
              {errors.address?.message?.toString()}
            </FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex mb={6}>
          <FormControl>
            <Flex mb={2}>
              <FormLabel htmlFor='file' className={styles.label}>
                お店の写真
              </FormLabel>
            </Flex>
            <Input
              type='file'
              {...register('pic')}
              accept='image/*'
              onChange={handleFileChange}
            />
            {preview.pic && <Image src={preview.pic} alt={preview.pic} />}
          </FormControl>
        </Flex>
        <Flex mb={6}>
          <Genres errors={errors} register={register} />
        </Flex>
        {fields.map((field, index) => (
          <div key={field.id}>
            <Flex mb={6}>
              <FormControl
                isInvalid={errors.menus && !!errors.menus[index]?.name?.message}
              >
                <Flex alignItems='center' gap={4} mb={2}>
                  <FormLabel className={styles.label} htmlFor='menu_name'>
                    メニュー
                  </FormLabel>
                  <span className={styles.required}>必須</span>
                </Flex>
                <Input
                  type='text'
                  {...register(`menus.${index}.name`, {
                    required: 'メニューは必須です',
                  })}
                />
                <FormErrorMessage>
                  {errors.menus &&
                    errors.menus[index]?.name?.message?.toString()}
                </FormErrorMessage>
              </FormControl>
            </Flex>
            <Flex mb={6}>
              <Ingredients errors={errors} control={control} index={index} />
            </Flex>
            <Flex mb={8}>
              <FormControl>
                <Flex mb={2}>
                  <FormLabel className={styles.label}>写真</FormLabel>
                </Flex>
                <Input
                  type='file'
                  {...register(`menus.${index}.pic`)}
                  accept='image/*'
                  onChange={handleFileChange}
                />
                {/* @ts-ignore */}
                {preview[`menus.${index}.pic`] && (
                  <Image
                    // @ts-ignore
                    src={preview[`menus.${index}.pic`]}
                    alt='プレビュー画像'
                  />
                )}
              </FormControl>
            </Flex>
          </div>
        ))}
        <Button onClick={handleAddMenu}>メニューを追加</Button>

        <Flex justifyContent='flex-end'>
          <Button
            type='submit'
            colorScheme='green'
            isDisabled={!isValid}
            isLoading={isSubmitting}
          >
            登録する
          </Button>
        </Flex>
      </form>
    </div>
  );
});
RegisterShop.displayName = 'RegisterPage';

export default RegisterShop;
