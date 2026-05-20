import type { APIRoute } from 'astro';
import { jsonResponse } from '../../../../libs/json-response.lib';
import { isCategory } from '../../../../libs/guards.lib';
import { relations } from '../../../../libs/relations.lib';

export const prerender = false;

export const GET = (({ params }) => {
  const category = params.category;
  const relation = params.relation;
  const id = Number(params.id);

  if (!category || !isCategory(category)) {
    return Response.json({ error: 'Category not found' }, { status: 404 });
  }

  const categoryRelations = relations[category as keyof typeof relations];

  if (!categoryRelations || !relation || !(relation in categoryRelations)) {
    return Response.json({ error: 'Relation not found' }, { status: 404 });
  }

  const config = categoryRelations[relation as keyof typeof categoryRelations];
  const data = config.collection.filter((item) => item[config.foreignKey] === id);

  return jsonResponse(data);
  // const id = Number(params.id);
  // const relation = params.relation;
  // const user = users.find((user) => user.id === id);

  // if (!user) {
  //   return Response.json({ error: 'User not found' }, { status: 404 });
  // }

  // if (!relation || !isRelation(relation)) {
  //   return Response.json({ error: 'Relation not found' }, { status: 404 });
  // }

  // const data = relations[relation].filter((item) => item.userId === id);

  // return jsonResponse(data);
}) satisfies APIRoute;

export function getStaticPaths() {
  return [];
}
