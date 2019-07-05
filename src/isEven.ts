export const isEven = (value: string | number): boolean => {
  if (typeof value === 'string') {
    return isEven(parseInt(value, 10));
  }
  return value % 2 === 0;
};
