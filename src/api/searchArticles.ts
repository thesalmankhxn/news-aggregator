import { searchArticles as searchNYT } from "./nytApi";
import { searchArticles as searchGuardian } from "./guardianApi";
import { searchArticles as searchNews } from "./newsApi";
import { Sources } from "./Models";
import { SearchFilter } from "@/Components/Context";
import { FilterQueryParams } from "@/Helpers";

export const searchArticles = async (params: SearchFilter) => {
  switch (params.source) {
    case Sources.NYT:
      return await searchNYT(
        FilterQueryParams({
          query: params.query,
          begin_date: params?.from?.replace(/-/g, ""),
          end_date: params?.to?.replace(/-/g, ""),
          facet_field: params.category ? "section_name" : undefined,
          facet_filter: !!params.category,
        })
      );
    case Sources.GUARDIAN:
      return await searchGuardian(
        FilterQueryParams({
          query: params.query,
          from_date: params?.from,
          to_date: params?.to,
          section: params.category,
        })
      );
    case Sources.NEWS:
      return await searchNews(
        FilterQueryParams({
          query: params.query,
          from: params?.from,
          to: params?.to,
          category: params.category,
          sortBy: "popularity",
          sources: "bbc-news",
        })
      );
    default:
      throw new Error("Unsupported source");
  }
};
