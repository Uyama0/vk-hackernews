import { FC } from "react";

import { IconButton } from "@vkontakte/vkui";
import { Icon24Refresh } from "@vkontakte/icons";

export const ArticleUpdateButton: FC<TArticleUpdateButton> = ({
  handleRefreshData,
}) => {
  return (
    <IconButton aria-label="обновить коментарии" onClick={handleRefreshData}>
      <Icon24Refresh />
    </IconButton>
  );
};
