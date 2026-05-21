import { describe, expect, it } from 'vitest';

import { collections } from '@/api/collections';
import { relations } from '@/api/relations';

type ResourceWithId = {
  id: number;
};

type ResourceWithNumericKey<TKey extends string> = ResourceWithId & Record<TKey, number>;
type ResourceWithNullableNumericKey<TKey extends string> = ResourceWithId & Record<TKey, number | null>;

function getIds(items: ResourceWithId[]): number[] {
  return items.map(({ id }) => id);
}

function expectForeignKeysToExist<TKey extends string>(
  items: ResourceWithNumericKey<TKey>[],
  foreignKey: TKey,
  validIds: Set<number>,
): void {
  for (const item of items) {
    expect(validIds.has(item[foreignKey]), `${foreignKey} should reference an existing record`).toBe(true);
  }
}

function expectNullableForeignKeysToExist<TKey extends string>(
  items: ResourceWithNullableNumericKey<TKey>[],
  foreignKey: TKey,
  validIds: Set<number>,
): void {
  for (const item of items) {
    expect(item[foreignKey], `${foreignKey} should be present for related records`).not.toBeNull();

    if (item[foreignKey] !== null) {
      expect(validIds.has(item[foreignKey]), `${foreignKey} should reference an existing record`).toBe(true);
    }
  }
}

describe('mock resource integrity', () => {
  it('keeps every registered collection non-empty with unique ids', () => {
    for (const [collectionName, items] of Object.entries(collections)) {
      expect(items.length, `${collectionName} should not be empty`).toBeGreaterThan(0);

      const ids = getIds(items);
      expect(new Set(ids).size, `${collectionName} ids should be unique`).toBe(ids.length);
    }
  });

  it('keeps foreign-key references aligned with API relations', () => {
    const userIds = new Set(getIds(collections.users));
    const postIds = new Set(getIds(collections.posts));
    const todoIds = new Set(getIds(collections.todos));

    expectForeignKeysToExist(relations.users.posts.collection, relations.users.posts.foreignKey, userIds);
    expectForeignKeysToExist(relations.users.comments.collection, relations.users.comments.foreignKey, userIds);
    expectForeignKeysToExist(relations.users.todos.collection, relations.users.todos.foreignKey, userIds);

    expectForeignKeysToExist(relations.posts.comments.collection, relations.posts.comments.foreignKey, postIds);
    expectNullableForeignKeysToExist(relations.todos.comments.collection, relations.todos.comments.foreignKey, todoIds);

    expectForeignKeysToExist(relations.posts.user.sourceCollection, relations.posts.user.sourceKey, userIds);
    expectForeignKeysToExist(relations.comments.user.sourceCollection, relations.comments.user.sourceKey, userIds);
    expectForeignKeysToExist(relations.comments.post.sourceCollection, relations.comments.post.sourceKey, postIds);
    expectForeignKeysToExist(relations.todos.user.sourceCollection, relations.todos.user.sourceKey, userIds);
  });
});
