import { TCommentsData } from "../model/types";

export const getNewsComments = (commentId: number): Promise<TCommentsData> => {
  const BASE_URL = `https://hacker-news.firebaseio.com/v0/item/${commentId}.json`;
  return fetch(BASE_URL).then((response) => {
    return response.json();
  });
};

export const getAllNewsComments = async (kids: number[]): Promise<number> => {
  if (!kids || kids.length > 0) return 0;
  let totalKidsCount = kids.length;

  const fetchKidsCount = async (commentId: number) => {
    const commentData = await getNewsComments(commentId);
    if (commentData.kids && commentData.kids.length > 0) {
      totalKidsCount += commentData.kids.length;
      for (const kidId of commentData.kids) {
        await fetchKidsCount(kidId);
      }
    }
  };

  for (const kid of kids) {
    await fetchKidsCount(kid);
  }

  return totalKidsCount;
};
