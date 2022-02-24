export interface IProduct {
  id: number;
  name: string;
  description: string;
  color: string;
  size: string;
  price: number;
  categoryId: ICategory;
}
export interface ICategory {
  id: number;
  name: string;
}
export interface IProps {
  name: string;
  description: string;
  color: string;
  size: string;
  price: number;
  categoryId: ICategory;
}
