import { FC, useState, useEffect } from "react";

import { CardGrid, Group, Headline, Spacing, Separator } from "@vkontakte/vkui";

import { TNewsArticle } from "entities/articleInfo/model/types";
import { useFetchComments } from "../model/hooks";
import { Comment } from "entities/comment";
import { TCommentsData } from "../model/types";

export const CommentsList: FC<TNewsArticle> = ({ kids }) => {
  const { commentsData, isLoading, error } = useFetchComments(kids);
  const [totalCommentsCount, setTotalCommentsCount] = useState(0);

  useEffect(() => {
    if (commentsData) setTotalCommentsCount(commentsData.length);
  }, [commentsData]);

  return (
    <Group>
      <Headline style={{ marginLeft: 16 }}>
        {totalCommentsCount} comments:
      </Headline>
      <Spacing size={24}>
        <Separator />
      </Spacing>
      <CardGrid size="l">
        {commentsData &&
          commentsData.map((comment) => (
            <Comment key={comment.id} {...comment}></Comment>
          ))}
      </CardGrid>
    </Group>
  );
};
