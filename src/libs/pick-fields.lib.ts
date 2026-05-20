export const pickFields = <T extends Record<string, any>>(item: T, fields: string): Partial<T> => {
  return fields.split(',').reduce((result, field) => {
    const key = field.trim() as keyof T;

    if (key in item) {
      result[key] = item[key];
    }

    return result;
  }, {} as Partial<T>);
};

export const getNestedValue = (item: Record<string, any>, path: string) => {
  return path.split('.').reduce((current, key) => {
    return current?.[key];
  }, item);
};
