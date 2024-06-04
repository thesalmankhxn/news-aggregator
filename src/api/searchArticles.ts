import { searchArticles as searchNYT } from "./nytApi";
import { searchArticles as searchGuardian } from "./guardianApi";
import { searchArticles as searchNews } from "./newsApi";
import { Sources } from "./Models";
import { SearchFilter } from "@/Components/Context";
import { FilterQueryParams } from "@/Helpers";

export const searchArticles = async (params: SearchFilter) => {
  switch (params.source) {
    case Sources.nyTimes:
      return await searchNYT(
        FilterQueryParams({
          query: params.query,
          begin_date: params?.date?.replace(/-/g, ""),
          end_date: params?.date?.replace(/-/g, ""),
          facet_field: params.category ? "section_name" : undefined,
          facet_filter: !!params.category,
        })
      );
    case Sources.guardian:
      return await searchGuardian(
        FilterQueryParams({
          query: params.query,
          from_date: params?.date,
          to_date: params?.date,
          section: params.category,
        })
      );
    case Sources.news:
      return await searchNews(
        FilterQueryParams({
          query: params.query,
          from: params?.date,
          to: params?.date,
          sources: params.category,
        })
      );
    default:
      throw new Error("Unsupported source");
  }
};
