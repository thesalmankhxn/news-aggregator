import wretch from "wretch";

const apiKey = import.meta.env.VITE_NEWS_API_KEY;
const baseUrl = "https://newsapi.org/v2/everything";

const newsApi = wretch().url(baseUrl).query({ apiKey });

interface ArticleSearchParams {
  query?: string;
  from?: string; // Format: YYYY-MM-DD
  to?: string; // Format: YYYY-MM-DD
  sources?: string; // Comma-separated list of sources
  page?: number;
  pageSize?: number;
  sortBy?: "relevancy" | "popularity" | "publishedAt";
}

export const searchArticles = async (params: ArticleSearchParams) => {
  try {
    const response = await newsApi.query(params).get().json();
    return response.articles.map((article: any) => ({
      id: article.url,
      title: article.title,
      description: article.description,
      url: article.url,
      date: article.publishedAt,
    }));
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
