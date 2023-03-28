import { useMemo } from 'react';

type TOption = Record<'label' | 'value', string>;

type TOptionIncremental = { key?: string } & TOption;

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
  }
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
  }, [items]);

  return result;
};
