import { companies } from '@/mocks/resources/companies.mock';
import { comments } from '@/mocks/resources/comments.mock';
import { posts } from '@/mocks/resources/posts.mock';
import { products } from '@/mocks/resources/products.mock';
import { todos } from '@/mocks/resources/todos.mock';
import { users } from '@/mocks/resources/users.mock';

export const relations = {
  companies: {
    products: {
      collection: products,
      foreignKey: 'companyId',
    },
    comments: {
      collection: comments,
      foreignKey: 'companyId',
    },
  },
  users: {
    posts: {
      collection: posts,
      foreignKey: 'userId',
    },
    comments: {
      collection: comments,
      foreignKey: 'userId',
    },
    todos: {
      collection: todos,
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
  products: {
    company: {
      collection: companies,
      sourceCollection: products,
      sourceKey: 'companyId',
      targetKey: 'id',
      single: true,
    },
    comments: {
      collection: comments,
      foreignKey: 'productId',
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
    product: {
      collection: products,
      sourceCollection: comments,
      sourceKey: 'productId',
      targetKey: 'id',
      single: true,
    },
    company: {
      collection: companies,
      sourceCollection: comments,
      sourceKey: 'companyId',
      targetKey: 'id',
      single: true,
    },
  },
  todos: {
    user: {
      collection: users,
      sourceCollection: todos,
      sourceKey: 'userId',
      targetKey: 'id',
      single: true,
    },
    comments: {
      collection: comments,
      foreignKey: 'todoId',
    },
  },
} as const;
