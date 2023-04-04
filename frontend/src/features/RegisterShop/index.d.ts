export type FormValues = {
  name: string;
  address: string;
  pic?: string;
  genre_id: string;
  menus: Array<{
    name: string;
    ingredients: Array<string>;
    pic?: string;
  }>;
};

// TODO: メニュー写真の型を動的につける
export type PreviewType = {
  pic?: string;
  'menus.0.pic'?: string;
};
