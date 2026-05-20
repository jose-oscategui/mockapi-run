import type { Endpoint } from '@/types/endpoint.type';
import { createCollectionEndpoints } from '@/data/endpoints/collection.endpoint';

export const postsEndpoint: Endpoint[] = [
  ...createCollectionEndpoints({
    resource: 'posts',
    listDescription: 'Returns a list of posts.',
    listResponse: [
      {
        id: 1,
        title: 'Understanding REST APIs',
        published: true,
      },
    ],
    detailDescription: 'Returns a single post by ID.',
    detailResponse: {
      id: 1,
      title: 'Understanding REST APIs',
      body: 'REST APIs allow communication between services.',
      published: true,
    },
    searchTerm: 'react',
    searchDescription: 'Search posts by title or content.',
    searchResponse: [
      {
        id: 12,
        title: 'React Performance Tips',
      },
    ],
    queryDescription:
      'The query layer is flexible: use any post field and match by value. Nested fields work too, for example `author.username` or `seo.metaTitle`.',
    queryExamples: [
      '/posts?userId=1',
      '/posts?category=frontend',
      '/posts?published=true',
      '/posts?author.username=bret',
      '/posts?seo.metaTitle=Understanding REST APIs',
    ],
    fields: ['id', 'title', 'slug'],
    fieldsDescription: 'Returns only selected post fields.',
    fieldsResponse: [
      {
        id: 1,
        title: 'Understanding REST APIs',
        slug: 'understanding-rest-apis',
      },
    ],
  }),
  {
    id: 'api-posts-comments',
    method: 'GET',
    path: '/posts/1/comments',
    description: 'Returns comments belonging to a specific post.',
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
