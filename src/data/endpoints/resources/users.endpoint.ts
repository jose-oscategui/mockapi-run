import type { Endpoint } from '@/types/api/endpoint.type';
import { createCollectionEndpoints } from '@/data/endpoints/factories/collection-endpoint';

export const usersEndpoint: Endpoint[] = [
  ...createCollectionEndpoints({
    resource: 'users',
    listDescription: 'Returns a list of users with basic profile data.',
    listResponse: [
      {
        id: 1,
        name: 'Leanne Graham',
        email: 'sincere@april.biz',
      },
    ],
    detailDescription: 'Returns a single user by ID.',
    detailResponse: {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'sincere@april.biz',
      role: 'admin',
    },
    searchTerm: 'leanne',
    searchDescription: 'Search users by name, username or email.',
    searchResponse: [
      {
        id: 1,
        name: 'Leanne Graham',
        email: 'sincere@april.biz',
      },
    ],
    queryDescription:
      'The query layer is flexible: use any user field and match by value. Nested fields work too, for example `company.name` or `address.city`.',
    queryExamples: [
      '/users?role=admin',
      '/users?status=active',
      '/users?company.name=Romaguera-Crona',
      '/users?address.city=Gwenborough',
    ],
    fields: ['id', 'name', 'email'],
    fieldsDescription: 'Returns only selected user fields.',
    fieldsResponse: [
      {
        id: 1,
        name: 'Leanne Graham',
        email: 'sincere@april.biz',
      },
    ],
  }),
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
    id: 'api-users-comments',
    method: 'GET',
    path: '/users/1/comments',
    description: 'Returns comments created by a specific user.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        postId: 1,
        body: 'Really useful article!',
      },
    ],
  },
  {
    id: 'api-users-todos',
    method: 'GET',
    path: '/users/1/todos',
    description: 'Returns todos assigned to a specific user.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        title: 'Prepare API mocks 1',
        completed: false,
      },
    ],
  },
];
