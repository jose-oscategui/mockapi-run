import { posts } from '../mocks/posts.mock';
import { users } from '../mocks/users.mock';

export const collections = {
  users,
  posts,
  // todos,
  // albums,
  // comments,
} as const;

export type Category = keyof typeof collections;
