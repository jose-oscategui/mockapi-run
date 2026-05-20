import type { Endpoint } from '@/types/endpoint.type';
import { createCollectionEndpoints } from '@/data/endpoints/collection.endpoint';

export const commentsEndpoint: Endpoint[] = [
  ...createCollectionEndpoints({
    resource: 'comments',
    listDescription: 'Returns a list of comments with post and author references.',
    listResponse: [
      {
        id: 1,
        postId: 1,
        userId: 2,
        body: 'Really useful article!',
      },
    ],
    detailDescription: 'Returns a single comment by ID.',
    detailResponse: {
      id: 1,
      postId: 1,
      userId: 2,
      body: 'Really useful article!',
      status: 'approved',
    },
    searchTerm: 'useful',
    searchDescription: 'Search comments by body content.',
    searchResponse: [
      {
        id: 12,
        body: 'Really useful article!',
      },
    ],
    queryDescription:
      'The query layer is flexible: use any comment field and match by value. Nested fields work too, for example `author.username` or `post.slug`.',
    queryExamples: [
      '/comments?postId=1',
      '/comments?userId=2',
      '/comments?status=approved',
      '/comments?author.username=bret',
      '/comments?post.slug=understanding-rest-apis',
    ],
    fields: ['id', 'body', 'userId', 'postId'],
    fieldsDescription: 'Returns only selected comment fields.',
    fieldsResponse: [
      {
        id: 1,
        body: 'Really useful article!',
        userId: 2,
        postId: 1,
      },
    ],
  }),

  {
    id: 'api-comments-post-detail',
    method: 'GET',
    path: '/comments/1/post',
    description: 'Returns the post associated with a comment.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: {
      id: 1,
      title: 'Understanding REST APIs',
    },
  },

  {
    id: 'api-comments-user-detail',
    method: 'GET',
    path: '/comments/1/user',
    description: 'Returns the author of a comment.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: {
      id: 2,
      name: 'Ervin Howell',
    },
  },
];
