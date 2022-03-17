import { mockProductList } from './mockProductRepository.mock';

export const mockList = [
  {
    id: '1',
    name: 'Jacket',
    products: [mockProductList[0]],
  },
  {
    id: '2',
    name: 'Trench coats',
    products: [mockProductList[0]],
  },
];
export const mockCategoryRepository = {
  create: jest.fn().mockImplementation(dto => dto),
  save: jest.fn().mockImplementation(category => {
    if (!category.id) {
      mockList.push({ id: mockList.length + 1, ...category, products: [] });
      return mockList[mockList.length - 1];
    }
    const index = mockList.findIndex(item => item.id === category.id);
    mockList[index] = category;

    return mockList[index];
  }),
  findOne: jest.fn().mockImplementation((id: string) => mockList.find(el => el.id === id) || null),
  find: jest.fn().mockImplementation(() => mockList),
  delete: jest.fn().mockImplementation(),
};
