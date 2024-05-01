import { FC } from "react";

import { useAppSelector } from "app/storeProvider/model/hooks";
import useNewsData from "../model/hooks";
import { TNewsCard } from "entities/newsCard/model/types";
import { NewsCard } from "entities/newsCard";

export const NewsList: FC = () => {
  const { isLoading, error } = useNewsData();
  const newsData = useAppSelector((state) => state.getFeed.newsFeed);
  if (isLoading) {
  }

  return (
    <>
      {newsData.map((news: TNewsCard) => (
        <NewsCard
          key={news.story_id}
          title={news.title}
          points={news.points}
          author={news.author}
          created_at_i={news.created_at_i}
          story_id={news.story_id}
        />
      ))}
    </>
  );
};
