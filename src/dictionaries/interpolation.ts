export const interpolation = (data: string, metadata: Record<string, any>) => {
  const newData = Object.entries(metadata).reduce((results, [key, value]) => {
    if (!results) {
      const newData = data.replace(`{{${key}}}`, value);
      return newData;
    }

    const newData = results.replace(`{{${key}}}`, value);
    return newData;
  }, '');

  return newData;
};
