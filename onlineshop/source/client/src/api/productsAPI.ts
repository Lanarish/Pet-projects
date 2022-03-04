import { IProduct } from 'src/interfaces/products';

export const getAllProducts = async (): Promise<[IProduct]> => {
  try {
    const response = await fetch('http://localhost:3001/api/products', {
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
    const response = await fetch(`http://localhost:3001/api/products/${id}`, {
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
