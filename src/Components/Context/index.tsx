import { FilterQueryParams } from "@/Helpers";
import useRunOnce from "@/Helpers/useRunOnce";
import { Sources } from "@/api/Models";
import React, { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

export type SearchFilter = {
  query?: string;
  category?: string;
  source: Sources;
  date?: string;
  keyword?: string;
};

type SearchFilterCtx = {
  filter: SearchFilter | null;
  setFilter: React.Dispatch<React.SetStateAction<SearchFilter | null>>;
};

const SearchFilterContext = createContext<SearchFilterCtx | null>(null);

export const SearchFilterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const source = searchParams.get("source");
  const [filter, setFilter] = useState<SearchFilter | null>(null);

  useRunOnce(() => {
    if (filter?.source) return;
    setFilter((f: SearchFilter) => ({ ...f, source: source }));
  });

  console.log(filter, "Filters");
  return (
    <SearchFilterContext.Provider value={{ filter, setFilter }}>
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
