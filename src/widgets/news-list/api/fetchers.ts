import { FetchNewsArguments, FetchNewsResult } from "../model/types";

const BASE_URL =
  "http://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=100";

export const fetchNews = (page: number): Promise<FetchNewsResult> => {
  return fetch(
    "http://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=100"
  ).then((response) => {
    return response.json();
  });
};
