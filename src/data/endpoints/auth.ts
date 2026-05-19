import type { Endpoint } from '../../types';

export const authEndpoint: Endpoint[] = [
  {
    id: 'api-auth-login',
    method: 'GET',
    path: '/api/auth/login',
    description: 'Accepts credentials and returns a mock JWT token.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: {
      status: 'success',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI...',
    },
  },
  {
    id: 'api-auth-me',
    method: 'GET',
    path: '/api/auth/me',
    description: 'Validate current session and return user context.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: {
      id: 1,
      email: 'Sincere@april.biz',
      role: 'admin',
    },
  },
];
