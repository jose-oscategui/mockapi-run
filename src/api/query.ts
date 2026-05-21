type QueryRecord = Record<string, unknown>;

export const pickFields = <T extends object>(item: T, fields: string): Partial<T> => {
  const record = item as T & QueryRecord;

  return fields.split(',').reduce<Partial<T>>((result, field) => {
    const key = field.trim() as keyof T;

    if (key in record) {
      result[key] = record[key] as T[keyof T];
    }

    return result;
  }, {});
};

export const getNestedValue = (item: object, path: string): unknown => {
  return path.split('.').reduce<unknown>((current, key) => {
    if (typeof current !== 'object' || current === null) {
      return undefined;
    }

    return (current as QueryRecord)[key];
  }, item);
};
