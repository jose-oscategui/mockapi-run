import { collections, type Category } from './collections.lib';

export const isCategory = (value: string): value is Category => {
  return value in collections;
};
