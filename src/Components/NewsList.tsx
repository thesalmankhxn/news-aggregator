import { PageLayoutCN } from "@/Layouts";
import { Input } from "@/components/ui/input";
import { Select } from "./Select";
import { useSearchFilter } from "./Context";
import { DatePicker } from "./DatePicker";
import { CATEGORY_OPTIONS, SOURCE_OPTIONS } from "@/Constants";
import { useState } from "react";
import ArticleCard from "./ArticleCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { data } from "@/Constants/DemoData";

const NewsList = () => {
  const { filter, updateSearchParams, searchParams } = useSearchFilter();

  const source = searchParams.get("source");
  const category = searchParams.get("category");
  const date = searchParams.get("date");
  const query = searchParams.get("query");

  const [inputValue, setInputValue] = useState<string>(query || "");

  const handleSourceSelect = (value: any) => {
    updateSearchParams({ ...filter, source: value });
  };

  const handleCategorySelect = (value: any) => {
    updateSearchParams({ ...filter, category: value });
  };

  const handleSubmit = () => {
    updateSearchParams({ ...filter, query: inputValue });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={PageLayoutCN.sectionContainer}>
      <div className="flex flex-wrap gap-4 mb-8">
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
          defaultValue={source}
        />
        <Select
          defaultValue={category}
          options={CATEGORY_OPTIONS}
          onChange={handleCategorySelect}
          placeholder={"Select Category"}
        />
        <DatePicker
          selectDate={(date: string) => updateSearchParams({ ...filter, date })}
          defaultValue={new Date(date)}
        />

        <button
          onClick={handleSubmit}
          className="h-[40px] bg-[#000] text-white rounded-md w-full"
        >
          Search
        </button>
      </div>

      <div className="w-full overflow-hidden relative min-h-[500px] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-300 to-gray-200">
        <div className="max-h-[600px] scrollbar overflow-y-auto">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
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
