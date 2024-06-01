export default interface Response<T> {
  result?: T;
  errData?: Object;
  err?: Array<string>;
  status?: number;
  cancelled?: boolean;
}
