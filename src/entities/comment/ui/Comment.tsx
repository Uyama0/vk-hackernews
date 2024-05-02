import { FC, useState } from "react";

import { ContentCard, Spacing, Group, CellButton } from "@vkontakte/vkui";
import { Icon24Add } from "@vkontakte/icons";

import { TCommentCard } from "./model/types";
import { Replies } from "entities/replies";

export const Comment: FC<TCommentCard> = ({ by, kids, text, deleted }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!deleted && (
        <>
          <ContentCard subtitle={by} text={text} width="100%" />
          {kids && (
            <CellButton
              onClick={() => {
                handleToggleOpen();
              }}
              centered
              before={<Icon24Add />}
            >
              more
            </CellButton>
          )}
          {isOpen && kids && kids.length > 0 && <Replies kids={kids} />}
          <Spacing />
        </>
      )}
    </>
  );
};
