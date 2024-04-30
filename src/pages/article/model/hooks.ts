import { useState, useEffect } from "react";

import { getNewsArticle } from "../api/fetchers";
import { TNewsArticle } from "entities/articleInfo/model/types";

export const useFetchNewsArticle = (BASE_URL: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [articleData, setArticleData] = useState<TNewsArticle>({} as TNewsArticle);

  const fetchData = async () => {
    try {
      const data = await getNewsArticle(BASE_URL);
      setArticleData(data);
    } catch (fetchError: any) {
      setError(fetchError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { articleData, isLoading, error };
};
