import { useMemo } from 'react';

type TOption = Record<'label' | 'value', string>;

type TOptionIncremental = { key?: string; pic?: string } & TOption;

type TOptionsIncremental = TOptionIncremental[];

type TUseCustomOptionArgs<TItem> = {
  items: TItem[] | undefined;
  getLabel: (item: TItem) => string;
} & Partial<{
  getValue: (item: TItem) => string;
  getKey: (item: TItem) => string;
  defaultLabel: string;
  ignoreDefault: boolean;
}>;

type TUseCustomOptions = <
  TItem extends {
    id: string;
    pic?: string;
  },
>(
  args: TUseCustomOptionArgs<TItem>
) => TOptionsIncremental;

export const useCustomOptions: TUseCustomOptions = ({
  items,
  getLabel,
  getValue,
  getKey,
  defaultLabel = '-',
  ignoreDefault = false,
}) => {
  const result = useMemo(() => {
    const defaultOptions = ignoreDefault
      ? []
      : [
          {
            value: '',
            label: defaultLabel,
            key: '',
          },
        ];

    const options = defaultOptions.concat(
      (items || []).map((item) => {
        const label = getLabel(item);
        const key = getKey ? getKey(item) : label;
        const value = getValue ? getValue(item) : item.id;

        return {
          value,
          label,
          key,
        };
      })
    );

    return options;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return result;
};

export const useCustomOptionsWithPic: TUseCustomOptions = ({
  items,
  getLabel,
  getValue,
  getKey,
  defaultLabel = '-',
  ignoreDefault = false,
}) => {
  const result = useMemo(() => {
    const defaultOptions = ignoreDefault
      ? []
      : [
          {
            value: '',
            label: defaultLabel,
            pic: '',
            key: '',
          },
        ];

    const options = defaultOptions.concat(
      (items || []).map((item) => {
        const label = getLabel(item);
        const key = getKey ? getKey(item) : label;
        const value = getValue ? getValue(item) : item.id;
        const pic = item.pic ? item.pic : '';

        return {
          value,
          label,
          pic,
          key,
        };
      })
    );

    return options;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return result;
};
