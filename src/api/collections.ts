import { companies } from '@/mocks/resources/companies.mock';
import { comments } from '@/mocks/resources/comments.mock';
import { posts } from '@/mocks/resources/posts.mock';
import { products } from '@/mocks/resources/products.mock';
import { todos } from '@/mocks/resources/todos.mock';
import { users } from '@/mocks/resources/users.mock';

export const collections = {
  companies,
  users,
  posts,
  products,
  comments,
  todos,
  // albums,
} as const;

export type Category = keyof typeof collections;
