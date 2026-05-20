import type { Endpoint } from '../../types';

export const usersEndpoint: Endpoint[] = [
  {
    id: 'api-users',
    method: 'GET',
    path: '/users',
    description: 'Returns a list of users with basic profile data.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        name: 'Leanne Graham',
        email: 'sincere@april.biz',
      },
    ],
  },
  {
    id: 'api-users-id',
    method: 'GET',
    path: '/users/1',
    description: 'Returns a single user by ID.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'sincere@april.biz',
      role: 'admin',
    },
  },
  {
    id: 'api-users-search',
    method: 'GET',
    path: '/users?search=leanne',
    description: 'Search users by name, username or email.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        name: 'Leanne Graham',
        email: 'sincere@april.biz',
      },
    ],
  },
  {
    id: 'api-users-role',
    method: 'GET',
    path: '/users?role=admin',
    description: 'Filter users by role.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 3,
        name: 'Clementine Bauch',
        role: 'admin',
      },
    ],
  },
  {
    id: 'api-users-status',
    method: 'GET',
    path: '/users?status=active',
    description: 'Filter users by account status.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        name: 'Leanne Graham',
        status: 'active',
      },
    ],
  },
  {
    id: 'api-users-sort',
    method: 'GET',
    path: '/users?_sort=name&_order=asc',
    description: 'Sort users alphabetically.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 2,
        name: 'Chelsey Dietrich',
      },
      {
        id: 1,
        name: 'Ervin Howell',
      },
    ],
  },
  {
    id: 'api-users-fields',
    method: 'GET',
    path: '/users?fields=id,name,email',
    description: 'Returns only selected user fields.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        name: 'Leanne Graham',
        email: 'sincere@april.biz',
      },
    ],
  },
  {
    id: 'api-users-multiple',
    method: 'GET',
    path: '/users?id=1&id=2',
    description: 'Filter multiple users by providing multiple ID parameters.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        name: 'Leanne Graham',
      },
      {
        id: 2,
        name: 'Ervin Howell',
      },
    ],
  },
  {
    id: 'api-users-company',
    method: 'GET',
    path: '/users?company=romaguera',
    description: 'Filter users by company name.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        name: 'Leanne Graham',
        company: 'Romaguera-Crona',
      },
    ],
  },
  {
    id: 'api-users-city',
    method: 'GET',
    path: '/users?city=gwenborough',
    description: 'Filter users by city.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        name: 'Leanne Graham',
        city: 'Gwenborough',
      },
    ],
  },
  {
    id: 'api-users-posts',
    method: 'GET',
    path: '/users/1/posts',
    description: 'Returns posts created by a specific user.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        title: 'Understanding REST APIs',
      },
    ],
  },
  {
    id: 'api-users-todos',
    method: 'GET',
    path: '/users/1/todos',
    description: 'Returns todo items assigned to a specific user.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        title: 'Finish API documentation',
        completed: false,
      },
    ],
  },
  {
    id: 'api-users-albums',
    method: 'GET',
    path: '/users/1/albums',
    description: 'Returns albums belonging to a specific user.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        title: 'Summer Vacation',
      },
    ],
  },
];
