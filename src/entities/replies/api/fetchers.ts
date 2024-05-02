export const getCommentReplies = (commentId: number) => {
    const BASE_URL = `https://hacker-news.firebaseio.com/v0/item/${commentId}.json`;
    return fetch(BASE_URL).then((response) => {
      return response.json();
    });
  };
  