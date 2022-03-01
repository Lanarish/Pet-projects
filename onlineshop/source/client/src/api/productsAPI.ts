import { IProduct } from 'src/interfaces/products';

export const getAllProducts = async (): Promise<[IProduct]> =>
  fetch('http://localhost:3001/api/products', {
    method: 'GET',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Something went wrong ...');
      }
      return response.json();
    })
    .catch((error: Error) => {
      throw error;
    });
