import { collections, type Category } from '@/libs/collections.lib';

export const isCategory = (value: string): value is Category => {
  return value in collections;
};
