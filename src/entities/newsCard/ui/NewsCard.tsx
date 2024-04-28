import { FC } from "react";

import { ContentCard } from "@vkontakte/vkui";

import { TNewsCard } from "../model/types";
import { convertDate } from "../lib/convertDate";

export const NewsCard: FC<TNewsCard> = ({
  title,
  points,
  author,
  created_at,
}) => {
  const converttedDate = convertDate(created_at);
  return (
    <ContentCard
      subtitle={converttedDate}
      header={title}
      caption={`points: ${points}`}
      text={`author: ${author}`}
    />
  );
};
