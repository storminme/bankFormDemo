import { Field } from '../../../types/types';

export const fetchFields = async (): Promise<Field[]> => {
  const response = await fetch('https://dummyjson.com/products/categories');
  if (!response.ok) {
    throw new Error('Failed to fetch fields');
  }
  return response.json();
};
