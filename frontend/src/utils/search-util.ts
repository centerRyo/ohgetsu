// クエリの文字列取得
export const getStringParams = (
  value: string | string[] | undefined
): string => {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value || '';
};
