export function filterArrayByObjectKeys<T extends Record<string, any>>(
  filterString: string,
  array: T[],
  keys?: (keyof T)[]
) {
  return array.filter((item) =>
    (keys || Object.keys(item)).some((key) => {
      const prop = item[key];

      return (
        typeof prop === "string" &&
        prop.toLocaleLowerCase().startsWith(filterString.toLocaleLowerCase())
      );
    })
  );
}
