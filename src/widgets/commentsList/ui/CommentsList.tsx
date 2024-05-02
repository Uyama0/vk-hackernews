import { FC, useState, useEffect } from "react";

import { CardGrid, Group, Headline, Spacing, Separator } from "@vkontakte/vkui";

import { TNewsArticle } from "entities/articleInfo/model/types";
import { useFetchComments } from "../model/hooks";
import { getAllNewsComments } from "../api/fetchers";
import { Comment } from "entities/comment";

export const CommentsList: FC<TNewsArticle> = ({ kids }) => {
  const { commentsData } = useFetchComments(kids);
  const [totalCommentsCount, setTotalCommentsCount] = useState(0);

  const fetchTotalKidsCount = async () => {
    try {
      const totalKids = await getAllNewsComments(kids);
      setTotalCommentsCount(totalKids);
    } catch (error) {
      console.error("Error fetching total kids count:", error);
    }
  };

  useEffect(() => {
    fetchTotalKidsCount();
  }, [kids]);

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
