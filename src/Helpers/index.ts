export const FilterQueryParams = (queryParams: any) => {
  return Object.fromEntries(
    Object.entries(queryParams).filter(
      ([_, value]) => value !== undefined && value !== null && value !== ""
    )
  );
};
