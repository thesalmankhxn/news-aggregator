export const FilterQueryParams = (queryParams: any) => {
  let params: { [index: string]: any } = { ...queryParams } as Object;
  const paramKeys = Object.keys(params);

  // Removes empty query params
  paramKeys.map((key) => {
    if (typeof params[key] !== "boolean" && !params[key]) {
      delete params[key];
    }
  });

  return params;
};
