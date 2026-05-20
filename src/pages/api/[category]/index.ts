import type { APIRoute } from 'astro';
import { collections } from '@/api/collections';
import { isCategory } from '@/api/guards';
import { jsonResponse } from '@/api/response';
import { getNestedValue, pickFields } from '@/api/query';

export const prerender = false;

const normalizeValue = (value: unknown) => String(value).trim().toLowerCase();

const matchesQueryValue = (fieldValue: unknown, queryValue: string): boolean => {
  if (fieldValue == null) return false;

  const normalizedQuery = normalizeValue(queryValue);

  if (Array.isArray(fieldValue)) {
    return fieldValue.some((value) => normalizeValue(value) === normalizedQuery);
  }

  return normalizeValue(fieldValue) === normalizedQuery;
};

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

      return matchesQueryValue(fieldValue, value);
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
