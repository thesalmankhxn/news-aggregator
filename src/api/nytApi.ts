// src/api/nytApi.ts

import wretch from "wretch";

const apiKey = import.meta.env.VITE_NY_API_KEY;
const baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

const nytApi = wretch().url(baseUrl).query({ "api-key": apiKey });

interface ArticleSearchParams {
  query?: string;
  begin_date?: string; // Format: YYYYMMDD
  end_date?: string; // Format: YYYYMMDD
  facet_field?: string; // e.g., section_name
  facet_filter?: boolean;
  page?: number;
  sort?: "newest" | "oldest" | "relevance";
}

export const searchArticles = async (params: ArticleSearchParams) => {
  try {
    const response = await nytApi.query(params).get().json();
    return response.response.docs.map((article: any) => ({
      id: article._id,
      title: article.headline.main,
      description: article.snippet,
      url: article.web_url,
      date: article.pub_date,
      image:
        article?.multimedia?.length > 0
          ? `https://www.nytimes.com/${article?.multimedia?.[0]?.url}`
          : null,
    }));
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
