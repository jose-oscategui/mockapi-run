import type { Endpoint } from '@/types/api/endpoint.type';
import { createCollectionEndpoints } from '@/data/endpoints/factories/collection-endpoint';

export const productsEndpoint: Endpoint[] = [
  ...createCollectionEndpoints({
    resource: 'products',
    listDescription: 'Returns a list of products with catalog and pricing data.',
    listResponse: [
      {
        id: 1,
        companyId: 1,
        title: 'Keychron Studio 60% Keyboard 1',
        price: 129.99,
        stock: 42,
      },
    ],
    detailDescription: 'Returns a single product by ID.',
    detailResponse: {
      id: 1,
      companyId: 1,
      title: 'Keychron Studio 60% Keyboard 1',
      slug: 'keychron-studio-60-keyboard-1',
      brand: 'Keychron',
      price: 129.99,
      status: 'active',
    },
    searchTerm: 'keychron',
    searchDescription: 'Search products by title, brand or description.',
    searchResponse: [
      {
        id: 8,
        companyId: 3,
        title: 'Keychron Air TKL Keyboard 8',
        brand: 'Keychron',
      },
    ],
    queryDescription:
      'The query layer is flexible: use any product field and match by value. Nested fields work too, for example `seller.name` or `shipping.freeShipping`.',
    queryExamples: [
      '/products?companyId=1',
      '/products?brand=Keychron',
      '/products?category=mechanical-keyboards',
      '/products?featured=true',
      '/products?seller.name=Northwind Devices',
      '/products?shipping.freeShipping=true',
    ],
    fields: ['id', 'title', 'price', 'stock'],
    fieldsDescription: 'Returns only selected product fields.',
    fieldsResponse: [
      {
        id: 1,
        companyId: 1,
        title: 'Keychron Studio 60% Keyboard 1',
        price: 129.99,
        stock: 42,
      },
    ],
  }),
  {
    id: 'api-products-company',
    method: 'GET',
    path: '/products/1/company',
    description: 'Returns the company associated with a specific product.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: {
      id: 1,
      name: 'Northstar Labs',
    },
  },
  {
    id: 'api-products-comments',
    method: 'GET',
    path: '/products/1/comments',
    description: 'Returns comments associated with a specific product.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        productId: 1,
        userId: 2,
        body: 'The typing experience feels great for long sessions.',
      },
    ],
  },
];
