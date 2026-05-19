import type { Endpoint } from '../../types';

export const eCommerceEndpoint: Endpoint[] = [
  {
    id: 'api-e-commerce-products',
    method: 'GET',
    path: '/api/e-commerce/products',
    description: 'Returns all products available in the mock catalog.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 101,
        title: 'Wireless Headphones',
        price: 99.99,
      },
    ],
  },
  {
    id: 'api-e-commerce-categories',
    method: 'GET',
    path: '/api/e-commerce/categories',
    description: 'List all product categories for navigation and filtering.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: ['Electronics', 'Apparel', 'Home & Kitchen'],
  },
  {
    id: 'api-e-commerce-orders',
    method: 'GET',
    path: '/api/e-commerce/orders',
    description: 'Fetch a list of mock customer orders.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [{ id: 'ord_992', total: 245.5, status: 'shipped' }],
  },
];
