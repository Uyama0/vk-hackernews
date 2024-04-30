import { FC, useEffect } from "react";

import { TNewsArticle } from "entities/articleInfo/model/types";
import { useFetchComments } from "../model/hooks";

export const CommentsList: FC<TNewsArticle> = ({ kids }) => {
  const { commentsData, isLoading, error } = useFetchComments(kids);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {commentsData &&
        commentsData.map((comment) => <div key={comment.id}>{comment.by}</div>)}
    </>
  );
};
