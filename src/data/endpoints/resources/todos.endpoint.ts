import type { Endpoint } from '@/types/api/endpoint.type';
import { createCollectionEndpoints } from '@/data/endpoints/factories/collection-endpoint';

export const todosEndpoint: Endpoint[] = [
  ...createCollectionEndpoints({
    resource: 'todos',
    listDescription: 'Returns a list of todos assigned to users.',
    listResponse: [
      {
        id: 1,
        userId: 1,
        title: 'Prepare API mocks 1',
        completed: false,
      },
    ],
    detailDescription: 'Returns a single todo by ID.',
    detailResponse: {
      id: 1,
      userId: 1,
      title: 'Prepare API mocks 1',
      completed: false,
      priority: 'high',
    },
    searchTerm: 'mocks',
    searchDescription: 'Search todos by title or description.',
    searchResponse: [
      {
        id: 12,
        title: 'Document API mocks 12',
      },
    ],
    queryDescription:
      'The query layer is flexible: use any todo field and match by value. Nested fields work too, for example `assignedTo.username` or `metadata.pinned`.',
    queryExamples: [
      '/todos?userId=1',
      '/todos?completed=false',
      '/todos?priority=high',
      '/todos?assignedTo.username=bret',
      '/todos?metadata.pinned=true',
    ],
    fields: ['id', 'title', 'completed', 'userId'],
    fieldsDescription: 'Returns only selected todo fields.',
    fieldsResponse: [
      {
        id: 1,
        title: 'Prepare API mocks 1',
        completed: false,
        userId: 1,
      },
    ],
  }),
  {
    id: 'api-todos-user',
    method: 'GET',
    path: '/todos/1/user',
    description: 'Returns the user assigned to a specific todo.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
    },
  },
  {
    id: 'api-todos-comments',
    method: 'GET',
    path: '/todos/1/comments',
    description: 'Returns comments associated with a specific todo.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        userId: 2,
        body: 'Really useful article!',
      },
    ],
  },
];
