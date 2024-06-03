import { PageLayoutCN } from "@/Layouts";
import { Input } from "@/components/ui/input";
import { Select } from "./Select";
import { useSearchFilter } from "./Context";
import { DatePicker } from "./DatePicker";
import { CATEGORY_OPTIONS, SOURCE_OPTIONS } from "@/Constants";
import { useState } from "react";
import ArticleCard from "./ArticleCard";

const NewsList = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const { filter, updateSearchParams, searchParams } = useSearchFilter();

  const source = searchParams.get("source");
  const category = searchParams.get("category");

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
        />

        <button
          onClick={handleSubmit}
          className="h-[40px] bg-[#000] text-white rounded-md w-full"
        >
          Search
        </button>
      </div>

      <div className="w-full overflow-hidden relative min-h-[500px] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-300 to-gray-200">
        <div className="grid grid-cols-auto-min-max gap-4">
          {[{}, {}, {}, {}].map((x, i) => (
            <ArticleCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
