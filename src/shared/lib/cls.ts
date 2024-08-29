export const cls = (
  className: string,
  mode: Record<string, boolean | string | undefined>,
  array: Array<string | undefined>
): string => {
  return [
    className,
    ...Object.entries(mode)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, key]) => Boolean(key))
      .map(([item]) => item),
    array.filter(Boolean).join(' '),
  ].join(' ');
};
