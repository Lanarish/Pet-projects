import { ICategory } from './categories';

export interface IProduct {
  productId: number;
  name: string;
  description: string;
  color: string;
  size: string;
  price: number;
  category: ICategory;
}
