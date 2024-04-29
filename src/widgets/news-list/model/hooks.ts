import { useState, useEffect } from "react";
import { useAppDispatch } from "app/storeProvider/model/hooks";

import { fetchNewsData } from "app/storeProvider/slices/newsFeedSlice";

const useNewsData = () => {
  console.log(1);

  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      dispatch(fetchNewsData());
    } catch (fetchError: any) {
      setError(fetchError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return { isLoading, error };
};

export default useNewsData;
