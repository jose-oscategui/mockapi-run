import type { APIRoute } from 'astro';
import { jsonResponse } from '../../../libs/json-response.lib';
import { getNestedValue, pickFields } from '../../../libs/pick-fields.lib';
import { isCategory } from '../../../libs/guards.lib';
import { collections } from '../../../libs/collections.lib';

export const prerender = false;

export const GET = (({ url, params }) => {
  const searchParams = url.searchParams;
  const category = params.category;

  if (!category || !isCategory(category)) {
    return Response.json({ error: 'Category not found' }, { status: 404 });
  }

  let result: object[] = [...collections[category]];

  const search = searchParams.get('search');
  const fields = searchParams.get('fields');

  for (const [key, value] of searchParams.entries()) {
    if (key === 'search' || key === 'fields') continue;

    result = result.filter((item) => {
      const fieldValue = getNestedValue(item, key);

      if (fieldValue == null) return false;

      return String(fieldValue).toLowerCase().includes(value.toLowerCase());
    });
  }

  if (search) {
    result = result.filter((item) =>
      Object.values(item).join(' ').toLowerCase().includes(search.toLowerCase()),
    );
  }

  if (fields) {
    result = result.map((item) => pickFields(item, fields));
  }

  return jsonResponse(result);
}) satisfies APIRoute;
