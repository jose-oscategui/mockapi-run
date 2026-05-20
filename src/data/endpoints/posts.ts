import type { Endpoint } from '../../types';

export const postsEndpoint: Endpoint[] = [
  {
    id: 'api-posts',
    method: 'GET',
    path: '/posts',
    description: 'Returns a list of posts.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        title: 'Understanding REST APIs',
        published: true,
      },
    ],
  },

  {
    id: 'api-posts-id',
    method: 'GET',
    path: '/posts/1',
    description: 'Returns a single post by ID.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: {
      id: 1,
      title: 'Understanding REST APIs',
      body: 'REST APIs allow communication between services.',
      published: true,
    },
  },

  {
    id: 'api-posts-search',
    method: 'GET',
    path: '/posts?search=react',
    description: 'Search posts by title or content.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 12,
        title: 'React Performance Tips',
      },
    ],
  },

  {
    id: 'api-posts-user',
    method: 'GET',
    path: '/posts?userId=1',
    description: 'Filter posts by author.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        userId: 1,
        title: 'Understanding REST APIs',
      },
    ],
  },

  {
    id: 'api-posts-category',
    method: 'GET',
    path: '/posts?category=frontend',
    description: 'Filter posts by category.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 3,
        title: 'Modern CSS Techniques',
        category: 'frontend',
      },
    ],
  },

  {
    id: 'api-posts-tag',
    method: 'GET',
    path: '/posts?tag=react',
    description: 'Filter posts by tag.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 12,
        title: 'React Performance Tips',
        tags: ['react'],
      },
    ],
  },

  {
    id: 'api-posts-published',
    method: 'GET',
    path: '/posts?published=true',
    description: 'Filter published posts.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        title: 'Understanding REST APIs',
        published: true,
      },
    ],
  },

  {
    id: 'api-posts-sort',
    method: 'GET',
    path: '/posts?_sort=title&_order=asc',
    description: 'Sort posts alphabetically.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 8,
        title: 'Advanced TypeScript',
      },
      {
        id: 5,
        title: 'Building Scalable APIs',
      },
    ],
  },

  {
    id: 'api-posts-fields',
    method: 'GET',
    path: '/posts?fields=id,title,slug',
    description: 'Returns only selected post fields.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        title: 'Understanding REST APIs',
        slug: 'understanding-rest-apis',
      },
    ],
  },

  {
    id: 'api-posts-multiple',
    method: 'GET',
    path: '/posts?id=1&id=2',
    description: 'Filter multiple posts by ID.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        title: 'Understanding REST APIs',
      },
      {
        id: 2,
        title: 'Why frontend performance matters',
      },
    ],
  },

  {
    id: 'api-posts-comments',
    method: 'GET',
    path: '/posts/1/comments',
    description: 'Returns comments belonging to a specific post.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        body: 'Really useful article!',
      },
    ],
  },

  {
    id: 'api-posts-author',
    method: 'GET',
    path: '/posts/1/user',
    description: 'Returns the author of a specific post.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: {
      id: 1,
      name: 'Leanne Graham',
    },
  },

  {
    id: 'api-posts-related',
    method: 'GET',
    path: '/posts/1/related',
    description: 'Returns related posts.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 14,
        title: 'Scaling Node.js Applications',
      },
    ],
  },
];