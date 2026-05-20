import { comments } from '@/mocks/resources/comments.mock';
import { posts } from '@/mocks/resources/posts.mock';
import { todos } from '@/mocks/resources/todos.mock';
import { users } from '@/mocks/resources/users.mock';

export const collections = {
  users,
  posts,
  comments,
  todos,
  // albums,
} as const;

export type Category = keyof typeof collections;
