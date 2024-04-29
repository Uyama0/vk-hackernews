import { FC } from "react";

import { NavIdProps } from "@vkontakte/vkui";

import { NewsList } from "widgets/news-list/ui/NewsList";
import { FeedHeader } from "entities/feedHeader";

export const Feed: FC<NavIdProps> = () => {
  return (
    <>
      <FeedHeader />
      <NewsList />
    </>
  );
};
