import { FilterQueryParams } from "@/Helpers";
import { Category, Sources } from "@/api/Models";
import React, { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

export type SearchFilter = {
  query: string;
  category: Category;
  source: Sources;
  date: string;
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
  const [filter, setFilter] = useState<SearchFilter | null>(null);

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
