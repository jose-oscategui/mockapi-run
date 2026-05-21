import { companiesEndpoint } from '@/data/endpoints/resources/companies.endpoint';
import { commentsEndpoint } from '@/data/endpoints/resources/comments.endpoint';
import { postsEndpoint } from '@/data/endpoints/resources/posts.endpoint';
import { productsEndpoint } from '@/data/endpoints/resources/products.endpoint';
import { todosEndpoint } from '@/data/endpoints/resources/todos.endpoint';
import { usersEndpoint } from '@/data/endpoints/resources/users.endpoint';

export const endpoints = [
  {
    id: 'companies',
    title: 'Companies',
    description: 'Company profiles with related products, comments, locations and hiring stats.',
    endpoints: companiesEndpoint,
  },
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
    description: 'Comments related to posts, todos, users, products and companies.',
    endpoints: commentsEndpoint,
  },
  {
    id: 'products',
    title: 'Products',
    description: 'Catalog products with pricing, inventory, company ownership and comment relations.',
    endpoints: productsEndpoint,
  },
  {
    id: 'todos',
    title: 'Todos',
    description: 'Task management items assigned to users and linked with comment activity.',
    endpoints: todosEndpoint,
  }
];
