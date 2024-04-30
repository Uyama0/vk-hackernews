import { TCommentsData } from "../model/types";

export const getNewsComments = (commentId: number): Promise<TCommentsData> => {
  const BASE_URL = `https://hacker-news.firebaseio.com/v0/item/${commentId}.json`;
  return fetch(BASE_URL).then((response) => {
    return response.json();
  });
};
