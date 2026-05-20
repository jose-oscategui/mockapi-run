import { comments } from '@/mocks/comments.mock';
import { posts } from '@/mocks/posts.mock';
import { users } from '@/mocks/users.mock';

export const collections = {
  users,
  posts,
  comments,
  // todos,
  // albums,
} as const;

export type Category = keyof typeof collections;
