import { describe, expect, it } from 'vitest';

import { getNestedValue, pickFields } from '@/api/query';

describe('pickFields', () => {
  it('returns only requested top-level keys', () => {
    const item = {
      id: 1,
      title: 'Post title',
      published: true,
    };

    expect(pickFields(item, 'id, title')).toEqual({
      id: 1,
      title: 'Post title',
    });
  });

  it('trims keys and ignores unknown fields', () => {
    const item = {
      id: 7,
      slug: 'hello-world',
    };

    expect(pickFields(item, ' slug , missing , id ')).toEqual({
      slug: 'hello-world',
      id: 7,
    });
  });
});

describe('getNestedValue', () => {
  it('reads nested values from dot-separated paths', () => {
    const item = {
      author: {
        profile: {
          username: 'jane',
        },
      },
    };

    expect(getNestedValue(item, 'author.profile.username')).toBe('jane');
  });

  it('returns undefined when a path segment is missing', () => {
    const item = {
      author: {
        profile: null,
      },
    };

    expect(getNestedValue(item, 'author.profile.username')).toBeUndefined();
    expect(getNestedValue(item, 'author.missing.username')).toBeUndefined();
  });
});
