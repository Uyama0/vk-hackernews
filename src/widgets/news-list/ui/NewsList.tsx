import { FC, useEffect, useState } from "react";

import { fetchNews } from "../api/fetchers";

import { NewsCard } from "@/entities/newsCard";
import { TNewsCard } from "@/entities/newsCard/model/types";

export const NewsList: FC = () => {
  const [newsFeed, setNewsFeed] = useState<TNewsCard[]>([]);
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchNews(page);
      setNewsFeed(data.hits);
    }
    fetchData();
  }, [page]);

  return (
    <>
      {newsFeed.map((news, index) => (
        <NewsCard
          key={index}
          title={news.title}
          points={news.points}
          author={news.author}
          created_at={news.created_at}
        />
      ))}
    </>
  );
};
