import { IProduct } from 'src/interfaces/products';
import { PRODUCTS_API } from 'src/store/constants';

export const getAllProducts = async (): Promise<[IProduct]> => {
  try {
    const response = await fetch(PRODUCTS_API, {
      method: 'GET',
    });
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      throw new Error('Something went wrong ...');
    }
  } catch (error) {
    throw new Error('ERROR');
  }
};

export const getOneProduct = async (id?: string): Promise<IProduct> => {
  try {
    const response = await fetch(`${PRODUCTS_API}${id}`, {
      method: 'GET',
    });

    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      throw new Error('Something went wrong ...');
    }
  } catch (error) {
    throw new Error('ERROR');
  }
};
