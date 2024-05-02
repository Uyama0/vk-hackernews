import { useState, useEffect } from "react";

import { getCommentReplies } from "../api/fetchers";
import { TReplies } from "./types";

export const useFetchReplies = (kids: number[]) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [replies, setReplies] = useState<TReplies[]>([]);

  useEffect(() => {
    const fetchReplies = async () => {
      setIsLoading(true);

      try {
        const repliesData = await Promise.all(
          kids.map((kid) => getCommentReplies(kid))
        );
        setReplies(repliesData);
      } catch (fetchError: any) {
        setError(fetchError);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReplies();
  }, [kids]);

  return { isLoading, error, replies };
};
