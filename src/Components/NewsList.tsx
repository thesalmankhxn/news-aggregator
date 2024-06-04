import { PageLayoutCN } from "@/Layouts";
import { Input } from "@/components/ui/input";
import { Select } from "./Select";
import { SearchFilter, useSearchFilter } from "./Context";
import { DatePicker } from "./DatePicker";
import { CATEGORY_OPTIONS, SOURCE_OPTIONS } from "@/Constants";
import { useState } from "react";
import ArticleCard from "./ArticleCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { data } from "@/Constants/DemoData";
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

  const handleClear = () => {
    updateSearchParams({
      query: "",
      category: "",
      from: "",
      to: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={PageLayoutCN.sectionContainer}>
      <div className="grid grid-cols-3 xxmd:grid-cols-2 gap-4 mb-8">
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
          defaultValue={filter?.category}
          options={CATEGORY_OPTIONS}
          onChange={handleCategorySelect}
          placeholder={"Select Category"}
        />
        <DatePicker
          selectDate={(date: string) =>
            updateSearchParams({ ...filter, from: date })
          }
          defaultValue={filter?.from}
          placeHolder="From"
        />
        <DatePicker
          selectDate={(date: string) =>
            updateSearchParams({ ...filter, to: date })
          }
          defaultValue={filter?.to}
          placeHolder="To"
        />

        <div className="flex">
          <button
            onClick={handleSubmit}
            className="h-[40px] bg-[#000] text-white rounded-l-md w-full"
          >
            Search
          </button>

          <button
            onClick={handleClear}
            className="h-[40px] w-16 bg-red-700 text-white rounded-r-md"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="w-full overflow-hidden relative min-h-[500px] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-300 to-gray-200">
        <div className="max-h-[600px] scrollbar overflow-y-auto">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 900: 2, 1200: 3, 1400: 4 }}
          >
            <Masonry>
              {data?.articles?.map((x, i) => (
                <ArticleCard key={i} data={x} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
