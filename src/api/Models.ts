export default interface Response<T> {
  result?: T;
  errData?: Object;
  err?: Array<string>;
  status?: number;
  cancelled?: boolean;
}

export enum Sources {
  news = "news",
  nyTimes = "ny-times",
  guardian = "guardian",
}

export enum Category {
  business = "business",
  entertainment = "entertainment",
  general = "general",
  health = "health",
  science = "science",
  sports = "sports",
  technology = "technology",
}
