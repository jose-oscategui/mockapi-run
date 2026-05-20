import { authEndpoint } from './auth';
import { blogEndpoint } from './blog';
import { eCommerceEndpoint } from './e-commerce';
import { educationEndpoint } from './education';
import { financeEndpoint } from './finance';
import { postsEndpoint } from './posts';
import { usersEndpoint } from './users';

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
  // {
  //   id: 'e-commerce',
  //   title: 'E-commerce',
  //   description: 'Endpoints related to products, orders, and customers.',
  //   endpoints: eCommerceEndpoint,
  // },
  // {
  //   id: 'blog',
  //   title: 'Blog',
  //   description: 'Resource for posts, comments, and editorial content.',
  //   endpoints: blogEndpoint,
  // },
  // {
  //   id: 'finance',
  //   title: 'Finance',
  //   description: 'Transactional data, market indices, and account balance simulations.',
  //   endpoints: financeEndpoint,
  // },
  // {
  //   id: 'education',
  //   title: 'Education',
  //   description: 'Curriculum data, including courses, modules, and learning progress.',
  //   endpoints: educationEndpoint,
  // },
  // {
  //   id: 'auth',
  //   title: 'Auth',
  //   description: 'Responses for authentication flows, session handling, and profile validation.',
  //   endpoints: authEndpoint,
  // },
];
