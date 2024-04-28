import { FC } from "react";

import { Root, View } from "@vkontakte/vkui";
import { useActiveVkuiLocation } from "@vkontakte/vk-mini-apps-router";

import { NewsView, NewsPanel } from "../provider/routerProvider";

import { Feed } from "../../pages/feed/ui/Feed";

const Layout: FC = () => {
  const {
    view: activeView = NewsPanel.Feed,
    panel: activePanel = NewsView.Main,
  } = useActiveVkuiLocation();

  return (
    <Root activeView={activeView}>
      <View nav={NewsView.Main} activePanel={activePanel}>
        <Feed nav={NewsPanel.Feed} />
      </View>
    </Root>
  );
};

export default Layout;
