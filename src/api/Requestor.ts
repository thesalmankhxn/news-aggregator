import wretch from "wretch";
import Response from "./Models";
import { FilterQueryParams } from "../Helpers";

export abstract class RequestDefaults {
  public static token: string = "";
  public static orgId: string = "";
  public static baseUrl: string = "";
  public static ns: string = "";

  public static changeToken(t: string) {
    RequestDefaults.token = t;
  }

  public static changeOrgId(oi: string) {
    RequestDefaults.orgId = oi;
  }

  public static changeBaseUrl(bu: string) {
    RequestDefaults.baseUrl = bu;
  }

  public static changeNs(ns: string) {
    RequestDefaults.ns = ns;
  }
}

const intercept401 = (err: any) => {
  throw err;
};

export const Get = async <T>(path: string, json?: any, queryParams?: any) => {
  let response: Response<T> = {};
  const params = FilterQueryParams(queryParams);
  const request = await wretch(`${RequestDefaults.baseUrl}${path}`)
    .query(params)
    .auth(RequestDefaults.token)
    .headers({ "x-org-id": RequestDefaults.orgId })
    .get(json)
    .unauthorized((err) => intercept401(err));

  try {
    response.result = (await request.json()) as T;
  } catch (e: any) {
    response.err = parseError(e.text);
    response.status = e.status;
  }

  return response;
};

export const PublicGetFile = async <T>(path: string, queryParams?: any) => {
  let response: Response<T> = {};
  const request = await wretch(`${RequestDefaults.baseUrl}${path}`)
    .headers({ "x-org-id": RequestDefaults.orgId })
    .query(queryParams)
    .get();
  try {
    response.result = (await request.blob()) as T;
  } catch (e: any) {
    response.err = parseError(e.text);
    response.status = e.status;
  }
  return response;
};

export const Post = async <T>(path: string, json?: any, queryParams?: any) => {
  let response: Response<T> = {};
  const params = FilterQueryParams(queryParams);
  const request = await wretch(`${RequestDefaults.baseUrl}${path}`)
    .query(params)
    .auth(RequestDefaults.token)
    .headers({ "x-org-id": RequestDefaults.orgId })
    .post(json)
    .unauthorized((err) => intercept401(err));

  try {
    response.result = (await request.json()) as T;
  } catch (e: any) {
    response.err = parseError(e.text);
    response.errData = parseErrorData(e.text);
    response.status = e.status;
  }

  return response;
};

export const Put = async <T>(path: string, json?: any, queryParams?: any) => {
  let response: Response<T> = {};
  const params = FilterQueryParams(queryParams);
  const request = await wretch(`${RequestDefaults.baseUrl}${path}`)
    .query(params)
    .auth(RequestDefaults.token)
    .headers({ "x-org-id": RequestDefaults.orgId })
    .put(json)
    .unauthorized((err) => intercept401(err));

  try {
    response.result = (await request.json()) as T;
  } catch (e: any) {
    response.err = parseError(e.text);
    response.status = e.status;
  }

  return response;
};

export const parseError = (errText: string): Array<string | any> => {
  try {
    let err = JSON.parse(errText);
    return (err && err.error) || err.message || err || [];
  } catch (e) {
    return [];
  }
};

export const parseErrorData = (errText: string): any => {
  try {
    let err = JSON.parse(errText);
    return (err && err.data) || null;
  } catch (e) {
    return null;
  }
};
