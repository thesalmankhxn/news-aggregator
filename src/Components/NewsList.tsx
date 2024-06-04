import { PageLayoutCN } from "@/Layouts";
import { Input } from "@/components/ui/input";
import { Select } from "./Select";
import { SearchFilter, useSearchFilter } from "./Context";
import { DatePicker } from "./DatePicker";
import { CATEGORY_OPTIONS, SOURCE_OPTIONS } from "@/Constants";
import { useState } from "react";
import ArticleCard from "./ArticleCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { searchArticles } from "@/api/searchArticles";

const NewsList = () => {
  const { filter, updateSearchParams } = useSearchFilter();

  const [inputValue, setInputValue] = useState<string>(filter?.query || "");
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const results = await searchArticles({
        ...filter,
        query: inputValue,
      } as SearchFilter);
      setArticles(results);
    } catch (error) {
      console.error("Error searching articles:", error);
    } finally {
      setLoading(false);
    }
  };
  console.log(articles, "ARTICLES");

  const handleSourceSelect = (value: any) => {
    updateSearchParams({ ...filter, source: value });
  };

  const handleCategorySelect = (value: any) => {
    updateSearchParams({ ...filter, category: value });
  };

  const handleSubmit = () => {
    updateSearchParams({ ...filter, query: inputValue });
    handleSearch();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={PageLayoutCN.sectionContainer}>
      <div className="grid grid-cols-3 xxmd:grid-cols-2 gap-4 mb-8 max-w-[1400px] mx-auto">
        <Input
          name="query"
          placeholder="Type your query"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Select
          options={SOURCE_OPTIONS}
          onChange={handleSourceSelect}
          placeholder={"Select Source"}
          defaultValue={filter?.source}
        />
        <Select
          defaultValue={
            filter?.category || (CATEGORY_OPTIONS[filter.source][0] as any)
          }
          options={CATEGORY_OPTIONS[filter.source]}
          onChange={handleCategorySelect}
          placeholder={"Select Category"}
        />
        <DatePicker
          selectDate={(date: string) =>
            updateSearchParams({ ...filter, from: date })
          }
          defaultValue={filter?.from as string}
          placeHolder="From"
        />
        <DatePicker
          selectDate={(date: string) =>
            updateSearchParams({ ...filter, to: date })
          }
          defaultValue={filter?.to as string}
          placeHolder="To"
        />

        <div className="flex">
          <button
            onClick={handleSubmit}
            className="h-[40px] bg-[#000] text-white rounded-md w-full"
          >
            Search
          </button>
        </div>
      </div>

      <div className="w-full overflow-hidden relative min-h-[500px] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-300 to-gray-200 max-w-[1400px] mx-auto">
        <div className="max-h-[600px] scrollbar overflow-y-auto">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 900: 2, 1200: 3, 1400: 4 }}
          >
            <Masonry>
              {loading ? (
                Array.from({ length: 8 }, (_, index) => (
                  <LoadingCard key={index} />
                ))
              ) : articles?.length ? (
                articles?.map((x, i) => <ArticleCard key={i} data={x} />)
              ) : (
                <>
                  <div className="h-full w-full grid place-content-center absolute inset-0 xmd:text-2xl text-4xl text-center">
                    No Articles Found!
                    <br />
                    Use filters to search for articles.
                  </div>
                </>
              )}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
};

const LoadingCard = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5 mr-4">
      <div
        role="status"
        className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
      >
        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>

        <div className="h-10 mt-4 bg-gray-200 rounded-md dark:bg-gray-700 w-32 mb-2"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default NewsList;
