import { FC } from "react";

import { useAppDispatch } from "app/storeProvider/model/hooks";

import { IconButton } from "@vkontakte/vkui";
import { fetchNewsData } from "app/storeProvider/slices/newsFeedSlice";

import { Icon24Refresh } from "@vkontakte/icons";

export const FeedUpdateButton: FC = () => {
  const dispatch = useAppDispatch();

  const handleFeedUpdate = () => {
    dispatch(fetchNewsData());
  };
  return (
    <IconButton onClick={handleFeedUpdate} aria-label="обновить новости">
      <Icon24Refresh />
    </IconButton>
  );
};
