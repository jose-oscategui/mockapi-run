import type { APIRoute } from 'astro';
import { isCategory } from '@/api/guards';
import { jsonResponse } from '@/api/response';
import { relations } from '@/api/relations';

export const prerender = false;

type RelationCollectionItem = Record<string, unknown>;

type DirectLookupRelation = {
  collection: RelationCollectionItem[];
  sourceCollection: RelationCollectionItem[];
  sourceKey: string;
  targetKey: string;
  single: true;
};

type ForeignKeyRelation = {
  collection: RelationCollectionItem[];
  foreignKey: string;
};

function hasDirectLookup(config: unknown): config is DirectLookupRelation {
  return (
    typeof config === 'object' &&
    config !== null &&
    'sourceCollection' in config &&
    'sourceKey' in config &&
    'targetKey' in config &&
    'single' in config
  );
}

function hasForeignKeyLookup(config: unknown): config is ForeignKeyRelation {
  return (
    typeof config === 'object' &&
    config !== null &&
    'collection' in config &&
    'foreignKey' in config
  );
}

export const GET = (({ params }) => {
  const category = params.category;
  const relation = params.relation;
  const id = Number(params.id);

  if (!category || !isCategory(category)) {
    return Response.json({ error: 'Category not found' }, { status: 404 });
  }

  const categoryRelations = relations[category as keyof typeof relations] as Record<string, unknown>;

  if (!categoryRelations || !relation || !(relation in categoryRelations)) {
    return Response.json({ error: 'Relation not found' }, { status: 404 });
  }

  const config = categoryRelations[relation];

  if (hasDirectLookup(config)) {
    const sourceItem = config.sourceCollection.find((item) => item.id === id);

    if (!sourceItem) {
      return Response.json({ error: 'Resource not found' }, { status: 404 });
    }

    const relatedItem = config.collection.find(
      (item) => item[config.targetKey] === sourceItem[config.sourceKey],
    );

    if (!relatedItem) {
      return Response.json({ error: 'Relation not found' }, { status: 404 });
    }

    return jsonResponse(relatedItem);
  }

  if (!hasForeignKeyLookup(config)) {
    return Response.json({ error: 'Relation not found' }, { status: 404 });
  }

  const data = config.collection.filter((item) => item[config.foreignKey] === id);

  return jsonResponse(data);
}) satisfies APIRoute;
