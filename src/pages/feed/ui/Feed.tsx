import { FC } from "react";

import { NavIdProps, Panel } from "@vkontakte/vkui";

import { NewsList } from "../../../widgets/news-list/ui/NewsList";

export const Feed: FC<NavIdProps> = (props: NavIdProps) => {
  return <NewsList />;
};
