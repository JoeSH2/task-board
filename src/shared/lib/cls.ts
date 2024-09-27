export type ModeClassName = Record<string, boolean | string | undefined>;

export const cls = (
  className: string,
  mode: ModeClassName,
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
