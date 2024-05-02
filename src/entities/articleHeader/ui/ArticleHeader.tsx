import { FC } from "react";

import { Group, SimpleCell } from "@vkontakte/vkui";

import { ArticleUpdateButton } from "features/articleUpdateButton.tsx";
import { BrowserBackButton } from "features/browserBackButton";

export const ArticleHeader: FC<TArticleHeader> = ({handleRefreshData}) => {
  return (
    <Group>
      <SimpleCell
        after={
          <>
            <BrowserBackButton />
            <ArticleUpdateButton handleRefreshData={handleRefreshData}/>
          </>
        }
      >
        Новость
      </SimpleCell>
    </Group>
  );
};
