import type { Endpoint } from '../../types';

export const blogEndpoint: Endpoint[] = [
  {
    id: 'api-blog-posts',
    method: 'GET',
    path: '/api/blog/posts',
    description: 'List all blog posts with excerpt and author info.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [{ id: 1, title: 'Modern Astro Patterns' }],
  },
  {
    id: 'api-blog-comments',
    method: 'GET',
    path: '/api/blog/comments',
    description: 'Fetch comments for specific posts or globally.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [{ id: 44, author: 'Jane Doe', text: 'Great post!' }],
  },
];
