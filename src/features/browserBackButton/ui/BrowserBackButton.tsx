import { FC } from "react";

import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

import { IconButton } from "@vkontakte/vkui";
import { Icon24BrowserBack } from "@vkontakte/icons";

export const BrowserBackButton: FC = () => {
  const routeNavigator = useRouteNavigator();
  return (
    <IconButton
      onClick={() => routeNavigator.back()}
      aria-label="вернуться назад"
    >
      <Icon24BrowserBack />
    </IconButton>
  );
};
