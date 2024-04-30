import { TNewsArticle } from "entities/articleInfo/model/types";

export const getNewsArticle = (BASE_URL: string): Promise<TNewsArticle> => {
  return fetch(BASE_URL).then((response) => {
    return response.json();
  });
};
