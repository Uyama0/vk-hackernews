import { FetchNewsResult } from "../model/types";

const BASE_URL =
  "https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=100";

export const getNewsFeed = (): Promise<FetchNewsResult> => {
  return fetch(BASE_URL).then((response) => {
    return response.json();
  });
};
