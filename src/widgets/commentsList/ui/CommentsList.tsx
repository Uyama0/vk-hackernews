import { FC } from "react";

import { TNewsArticle } from "entities/articleInfo/model/types";
import { useFetchComments } from "../model/hooks";
import { Comment } from "shared/ui/comment";

export const CommentsList: FC<TNewsArticle> = ({ kids }) => {
  const { commentsData, isLoading, error } = useFetchComments(kids);

  return (
    <>
      {commentsData &&
        commentsData.map((comment) => (
          <Comment key={comment.id} {...comment}></Comment>
        ))}
    </>
  );
};
