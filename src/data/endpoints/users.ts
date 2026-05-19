import type { Endpoint } from '../../types';

export const usersEndpoint: Endpoint[] = [
  {
    id: 'api-users',
    method: 'GET',
    path: '/users',
    description: 'Returns a list of 10 users with basic profile data.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
      },
    ],
  },
  {
    id: 'api-users-id',
    method: 'GET',
    path: '/users/:id',
    description: 'Returns a single user matching the provided ID.',
    exampleTitle: 'EXAMPLE: /users/1',
    response: {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
    },
  },
  {
    id: 'api-users-roles',
    method: 'GET',
    path: '/users/roles',
    description: 'List all available user roles and their associated permissions.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      { id: 1, name: 'Leanne Graham' },
      { id: 2, name: 'Ervin Howell' },
    ],
  },
  {
    id: 'api-users-query-params',
    method: 'GET',
    path: '/users?limit=5&role=admin',
    description: 'Use query parameters for pagination, limiting results, or filtering by attributes.',
    exampleTitle: 'SUPPORTED PARAMETERS',
    response: [
      { id: 1, name: 'Leanne Graham' },
      { id: 2, name: 'Ervin Howell' },
    ],
  },
];
