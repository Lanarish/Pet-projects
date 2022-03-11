import { ICategory } from './categories';

export interface IProduct {
  id: number;
  name: string;
  description: string;
  color: string;
  size: string;
  price: number;
  category: ICategory;
}
