import { collections, type Category } from '@/api/collections';

export const isCategory = (value: string): value is Category => {
  return value in collections;
};
