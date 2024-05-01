import { FC } from "react";

import { CardGrid, Group, Headline, Spacing, Separator } from "@vkontakte/vkui";

import { TNewsArticle } from "entities/articleInfo/model/types";
import { useFetchComments } from "../model/hooks";
import { Comment } from "shared/ui/comment";

export const CommentsList: FC<TNewsArticle> = ({ kids }) => {
  const { commentsData, isLoading, error } = useFetchComments(kids);

  return (
    <Group>
      <Headline style={{ marginLeft: 16 }}>
        {commentsData.length} comments:
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
