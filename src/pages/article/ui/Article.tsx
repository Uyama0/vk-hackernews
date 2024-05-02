import { FC } from "react";

import { useSearchParams } from "@vkontakte/vk-mini-apps-router";
import { NavIdProps } from "@vkontakte/vkui";

import { useFetchNewsArticle } from "../model/hooks";
import { ArticleInfo } from "entities/articleInfo";
import { CommentsList } from "widgets/commentsList";

import { ArticleHeader } from "entities/articleHeader/ui/ArticleHeader";

export const Article: FC<NavIdProps> = () => {
  const [params] = useSearchParams();

  const articleId = params.get("id");

  const BASE_URL = `https://hacker-news.firebaseio.com/v0/item/${articleId}.json`;

  const { articleData, isLoading, error, refreshData } =
    useFetchNewsArticle(BASE_URL);

  const handleRefreshData = () => {
    refreshData();
  };

  return (
    <>
      {!isLoading && (
        <>
       
          <ArticleHeader handleRefreshData={handleRefreshData}/>
          <ArticleInfo {...articleData} />
          <CommentsList {...articleData} />
        </>
      )}
    </>
  );
};
