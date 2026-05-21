import { describe, expect, it } from 'vitest';

import { jsonResponse } from '@/api/response';

describe('jsonResponse', () => {
  it('returns a pretty-printed JSON response', async () => {
    const response = jsonResponse({ ok: true, count: 2 });

    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe('application/json');
    expect(await response.text()).toBe(`{
  "ok": true,
  "count": 2
}`);
  });

  it('preserves custom init values and headers', () => {
    const response = jsonResponse(
      { ok: true },
      {
        status: 202,
        headers: {
          'Cache-Control': 'no-store',
          'Content-Type': 'application/vnd.api+json',
        },
      },
    );

    expect(response.status).toBe(202);
    expect(response.headers.get('Cache-Control')).toBe('no-store');
    expect(response.headers.get('Content-Type')).toBe('application/vnd.api+json');
  });
});
