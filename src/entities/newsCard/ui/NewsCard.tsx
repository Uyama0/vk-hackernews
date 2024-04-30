import { FC } from "react";

import { ContentCard } from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

import { TNewsCard } from "../model/types";
import { NewsPanel } from "app/routerProvider/routerProvider";
import { convertDate } from "shared/lib/coverDate";

export const NewsCard: FC<TNewsCard> = ({
  title,
  points,
  author,
  created_at,
  story_id,
}) => {
  const routeNavigator = useRouteNavigator();
  const converttedDate = convertDate(created_at);

  const handleCardClick = () => {
    const params = `id=${story_id}`;
    routeNavigator.push(`/${NewsPanel.Article}?${params}`);
  };

  return (
    <ContentCard
      onClick={handleCardClick}
      subtitle={converttedDate}
      header={title}
      caption={`points: ${points}`}
      text={`author: ${author}`}
    />
  );
};
