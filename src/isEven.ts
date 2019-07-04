export const isEven: (value: number | string) => boolean = value => {
  if (typeof value === 'string') {
    return isEven(parseInt(value, 10));
  }
  return value % 2 === 0;
};
