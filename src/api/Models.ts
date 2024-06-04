export default interface Response<T> {
  result?: T;
  errData?: Object;
  err?: Array<string>;
  status?: number;
  cancelled?: boolean;
}

export enum Sources {
  NYT = "NYT",
  GUARDIAN = "GUARDIAN",
  NEWS = "NEWS",
}

export const categories = {
  NYT: [
    "world",
    "politics",
    "technology",
    "science",
    "health",
    "sports",
    "arts",
    "fashion",
    "food",
    "travel",
    "opinion",
    "business",
    "books",
  ],
  GUARDIAN: [
    "world",
    "politics",
    "technology",
    "science",
    "health",
    "sport",
    "culture",
    "fashion",
    "food",
    "travel",
    "commentisfree",
    "business",
    "books",
  ],
  NEWS: [
    "bbc-news",
    "cnn",
    "the-verge",
    "bbc-sport",
    "reuters",
    "the-new-york-times",
    "the-guardian-uk",
    "al-jazeera-english",
    "buzzfeed",
    "engadget",
    "wired",
    "techcrunch",
  ],
};

interface Source {
  id: string | null;
  name: string;
}

export interface Article {
  source: Source;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  image: string | null;
  publishedAt: string;
  content: string;
}
