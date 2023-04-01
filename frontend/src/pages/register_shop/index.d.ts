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
