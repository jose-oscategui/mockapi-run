import type { Endpoint } from '@/types/api/endpoint.type';

type EndpointResponse = Endpoint['response'];

interface BaseCollectionEndpointsConfig {
  resource: string;
  listDescription: string;
  listResponse: EndpointResponse;
  detailDescription: string;
  detailResponse: EndpointResponse;
  searchTerm: string;
  searchDescription: string;
  searchResponse: EndpointResponse;
  queryDescription: string;
  queryExamples: string[];
  fields: string[];
  fieldsDescription: string;
  fieldsResponse: EndpointResponse;
}

export function createCollectionEndpoints(config: BaseCollectionEndpointsConfig): Endpoint[] {
  const {
    resource,
    listDescription,
    listResponse,
    detailDescription,
    detailResponse,
    searchTerm,
    searchDescription,
    searchResponse,
    queryDescription,
    queryExamples,
    fields,
    fieldsDescription,
    fieldsResponse,
  } = config;

  return [
    {
      id: `api-${resource}`,
      method: 'GET',
      path: `/${resource}`,
      description: listDescription,
      exampleTitle: 'SAMPLE RESPONSE',
      response: listResponse,
    },
    {
      id: `api-${resource}-id`,
      method: 'GET',
      path: `/${resource}/1`,
      description: detailDescription,
      exampleTitle: 'SAMPLE RESPONSE',
      response: detailResponse,
    },
    {
      id: `api-${resource}-search`,
      method: 'GET',
      path: `/${resource}?search=${searchTerm}`,
      description: searchDescription,
      exampleTitle: 'SAMPLE RESPONSE',
      response: searchResponse,
    },
    {
      id: `api-${resource}-query-pattern`,
      method: 'GET',
      path: `/${resource}?<field>=<value>`,
      description: queryDescription,
      exampleTitle: 'SUPPORTED EXAMPLES',
      response: {
        examples: queryExamples,
      },
    },
    {
      id: `api-${resource}-fields`,
      method: 'GET',
      path: `/${resource}?fields=${fields.join(',')}`,
      description: fieldsDescription,
      exampleTitle: 'SAMPLE RESPONSE',
      response: fieldsResponse,
    },
  ];
}
