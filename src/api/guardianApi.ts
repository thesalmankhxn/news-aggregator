import wretch from "wretch";

const apiKey = import.meta.env.VITE_GUARDIAN_API_KEY;
const baseUrl = "https://content.guardianapis.com/search";

const guardianApi = wretch().url(baseUrl).query({ "api-key": apiKey });

interface ArticleSearchParams {
  query?: string;
  from_date?: string; // Format: YYYY-MM-DD
  to_date?: string; // Format: YYYY-MM-DD
  section?: string; // e.g., technology
  page?: number;
  pageSize?: number;
  orderBy?: "newest" | "oldest" | "relevance";
}

export const searchArticles = async (params: ArticleSearchParams) => {
  try {
    const response = await guardianApi.query(params).get().json();
    return response.response.results.map((article: any) => ({
      id: article.id,
      title: article.webTitle,
      description: article.fields.trailText,
      url: article.webUrl,
      date: article.webPublicationDate,
      image: article.fields.thumbnail || null,
    }));
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
