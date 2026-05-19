import { authEndpoint } from './auth';
import { blogEndpoint } from './blog';
import { eCommerceEndpoint } from './e-commerce';
import { educationEndpoint } from './education';
import { financeEndpoint } from './finance';
import { usersEndpoint } from './users';

export const endpoints = [
  {
    id: 'users',
    title: 'Users',
    description:
      'The users resource provides data about people, including profiles, contact information, and account details.',
    endpoints: usersEndpoint,
  },
  {
    id: 'e-commerce',
    title: 'E-commerce',
    description: 'Endpoints related to products, orders, and customers.',
    endpoints: eCommerceEndpoint,
  },
  {
    id: 'blog',
    title: 'Blog',
    description: 'Resource for posts, comments, and editorial content.',
    endpoints: blogEndpoint,
  },
  {
    id: 'finance',
    title: 'Finance',
    description: 'Transactional data, market indices, and account balance simulations.',
    endpoints: financeEndpoint,
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Curriculum data, including courses, modules, and learning progress.',
    endpoints: educationEndpoint,
  },
  {
    id: 'auth',
    title: 'Auth',
    description: 'Responses for authentication flows, session handling, and profile validation.',
    endpoints: authEndpoint,
  },
];
