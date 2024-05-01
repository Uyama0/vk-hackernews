import { FC } from "react";

import { ContentCard, Spacing } from "@vkontakte/vkui";
import { TCommentCard } from "shared/types/types";

export const Comment: FC<TCommentCard> = ({ by, kids, text, deleted }) => {
  return (
    <>
      {!deleted  && (
        <>
          <ContentCard subtitle={by} text={text} />
          <Spacing />
        </>
      )}
    </>
  );
};
