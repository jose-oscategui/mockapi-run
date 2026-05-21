import { describe, expect, it } from 'vitest';

import { collections } from '@/api/collections';
import { isCategory } from '@/api/guards';

describe('isCategory', () => {
  it('accepts every registered collection key', () => {
    for (const category of Object.keys(collections)) {
      expect(isCategory(category)).toBe(true);
    }
  });

  it('rejects unknown category names', () => {
    expect(isCategory('albums')).toBe(false);
    expect(isCategory('Users')).toBe(false);
  });
});
