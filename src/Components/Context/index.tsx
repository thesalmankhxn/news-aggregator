import { CATEGORY_OPTIONS } from "@/Constants";
import { FilterQueryParams } from "@/Helpers";
import useRunOnce from "@/Helpers/useRunOnce";
import { Sources } from "@/api/Models";
import { format } from "date-fns";
import React, { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

export type SearchFilter = {
  query: string;
  category: string;
  source: Sources;
  from: string;
  to: string;
};

type SearchFilterCtx = {
  filter: SearchFilter | null;
  setFilter: React.Dispatch<React.SetStateAction<SearchFilter | null>>;
  updateSearchParams: (changeFilter: SearchFilter) => void;
  searchParams: any;
};

const SearchFilterContext = createContext<SearchFilterCtx | null>(null);

export const SearchFilterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const source = searchParams.get("source");
  const category = searchParams.get("category");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const query = searchParams.get("query");

  const params = FilterQueryParams({
    source,
    from: from || format(new Date(), "yyyy-MM-dd"),
    to: to || format(new Date(), "yyyy-MM-dd"),
    query,
    category: category || CATEGORY_OPTIONS?.[source]?.[0],
  });

  const [filter, setFilter] = useState<SearchFilter | null>(
    params as SearchFilter
  );

  useRunOnce(() => {
    updateSearchParams(params as SearchFilter);
  });

  const updateSearchParams = (changeFilter?: SearchFilter) => {
    const params = FilterQueryParams(changeFilter);
    changeFilter && setFilter((prev) => ({ ...prev, ...changeFilter }));
    setSearchParams(params);
  };

  console.log(filter, "Filters");
  return (
    <SearchFilterContext.Provider
      value={{ filter, setFilter, updateSearchParams, searchParams }}
    >
      {children}
    </SearchFilterContext.Provider>
  );
};

export const useSearchFilter = () => {
  const context = useContext(SearchFilterContext);
  if (context === null) {
    throw new Error(
      "useSearchFilter must be used within a SearchFilterContext component"
    );
  }

  return context;
};
