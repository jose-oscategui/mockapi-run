import type { APIRoute } from 'astro';
import { collections } from '@/libs/collections.lib';
import { isCategory } from '@/libs/guards.lib';
import { jsonResponse } from '@/libs/json-response.lib';

export const prerender = false;

export const GET = (({ params }) => {
  const category = params.category;
  const id = Number(params.id);

  if (!category || !isCategory(category)) {
    return Response.json({ error: 'Category not found' }, { status: 404 });
  }

  const item = collections[category].find((item) => item.id === id);

  if (!item) {
    return Response.json({ error: 'Resource not found' }, { status: 404 });
  }

  return jsonResponse(item);
}) satisfies APIRoute;
