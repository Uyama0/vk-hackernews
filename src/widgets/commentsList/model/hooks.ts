import { useState, useEffect } from "react";

import { getNewsComments } from "../api/fetchers";
import { TCommentsData } from "./types";

export const useFetchComments = (comments: number[]) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [commentsData, setCommentsData] = useState<TCommentsData[]>(
    [] as TCommentsData[]
  );

  const fetchData = async () => {
    try {
      Promise.all(comments.map((commentId) => getNewsComments(commentId))).then(
        (commentsDataResolved) => {
          setCommentsData(commentsDataResolved);
        }
      );
    } catch (fetchError: any) {
      setError(fetchError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { commentsData, isLoading, error };
};
