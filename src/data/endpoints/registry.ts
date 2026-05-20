import { commentsEndpoint } from '@/data/endpoints/resources/comments.endpoint';
import { postsEndpoint } from '@/data/endpoints/resources/posts.endpoint';
import { todosEndpoint } from '@/data/endpoints/resources/todos.endpoint';
import { usersEndpoint } from '@/data/endpoints/resources/users.endpoint';

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
