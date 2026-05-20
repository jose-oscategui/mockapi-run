import { postsEndpoint } from '@/data/endpoints/posts.endpoint';
import { todosEndpoint } from '@/data/endpoints/todos.endpoint';
import { usersEndpoint } from '@/data/endpoints/users.endpoint';
import { commentsEndpoint } from './comments.endpoint';

export const endpoints = [
  {
    id: 'users',
    title: 'Users',
    description: 'User profiles, search, filters, roles and related resources.',
    endpoints: usersEndpoint,
  },
  {
    id: 'posts',
    title: 'Posts',
    description: 'Blog posts, articles, authors, tags and publishing states.',
    endpoints: postsEndpoint,
  },
  {
    id: 'comments',
    title: 'Comments',
    description: 'Comments related to posts, users or products.',
    endpoints: commentsEndpoint,
  },
  {
    id: 'todos',
    title: 'Todos',
    description: 'Task management items assigned to users and linked with comment activity.',
    endpoints: todosEndpoint,
  }
];
