import { comments } from '@/mocks/comments.mock';
import { posts } from '@/mocks/posts.mock';
import { users } from '@/mocks/users.mock';

export const relations = {
  users: {
    posts: {
      collection: posts,
      foreignKey: 'userId',
    },
    comments: {
      collection: comments,
      foreignKey: 'userId',
    },
  },
  posts: {
    user: {
      collection: users,
      sourceCollection: posts,
      sourceKey: 'userId',
      targetKey: 'id',
      single: true,
    },
    comments: {
      collection: comments,
      foreignKey: 'postId',
    },
  },
  comments: {
    user: {
      collection: users,
      sourceCollection: comments,
      sourceKey: 'userId',
      targetKey: 'id',
      single: true,
    },
    post: {
      collection: posts,
      sourceCollection: comments,
      sourceKey: 'postId',
      targetKey: 'id',
      single: true,
    },
  },
} as const;
