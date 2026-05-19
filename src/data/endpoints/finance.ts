import type { Endpoint } from '../../types';

export const financeEndpoint: Endpoint[] = [
  {
    id: 'api-finance-transactions',
    method: 'GET',
    path: '/api/finance/transactions',
    description: 'Returns a history of recent financial transactions.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [{ id: 'tx_9281', amount: -45.0 }],
  },
  {
    id: 'api-finance-market',
    method: 'GET',
    path: '/api/finance/market',
    description: 'Mock stock market indices and currency exchange rates.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: {
      indices: { SPX: 4500.2, DJI: 34000.5 },
    },
  },
];
