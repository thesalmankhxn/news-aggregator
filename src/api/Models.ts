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
