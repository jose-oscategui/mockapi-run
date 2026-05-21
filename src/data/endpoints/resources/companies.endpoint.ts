import type { Endpoint } from '@/types/api/endpoint.type';
import { createCollectionEndpoints } from '@/data/endpoints/factories/collection-endpoint';

export const companiesEndpoint: Endpoint[] = [
  ...createCollectionEndpoints({
    resource: 'companies',
    listDescription: 'Returns a list of companies with profile, hiring and location data.',
    listResponse: [
      {
        id: 1,
        name: 'Northstar Labs',
        industry: 'developer-tools',
        verified: true,
      },
    ],
    detailDescription: 'Returns a single company by ID.',
    detailResponse: {
      id: 1,
      name: 'Northstar Labs',
      slug: 'northstar-labs',
      status: 'active',
      website: 'https://northstarlabs.dev',
    },
    searchTerm: 'northstar',
    searchDescription: 'Search companies by name, legal name or description.',
    searchResponse: [
      {
        id: 1,
        name: 'Northstar Labs',
        legalName: 'Northstar Labs Inc.',
      },
    ],
    queryDescription:
      'The query layer is flexible: use any company field and match by value. Nested fields work too, for example `location.city` or `headquarters.currency`.',
    queryExamples: [
      '/companies?industry=developer-tools',
      '/companies?verified=true',
      '/companies?location.country=United States',
      '/companies?headquarters.currency=USD',
    ],
    fields: ['id', 'name', 'industry', 'website'],
    fieldsDescription: 'Returns only selected company fields.',
    fieldsResponse: [
      {
        id: 1,
        name: 'Northstar Labs',
        industry: 'developer-tools',
        website: 'https://northstarlabs.dev',
      },
    ],
  }),
  {
    id: 'api-companies-products',
    method: 'GET',
    path: '/companies/1/products',
    description: 'Returns products associated with a specific company.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        companyId: 1,
        title: 'Keychron Studio 60% Keyboard 1',
      },
    ],
  },
  {
    id: 'api-companies-comments',
    method: 'GET',
    path: '/companies/1/comments',
    description: 'Returns comments associated with a specific company.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [
      {
        id: 1,
        companyId: 1,
        productId: 1,
        body: 'The typing experience feels great for long sessions.',
      },
    ],
  },
];
