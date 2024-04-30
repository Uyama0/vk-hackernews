import { FC } from "react";

import { Root, View } from "@vkontakte/vkui";
import { useActiveVkuiLocation } from "@vkontakte/vk-mini-apps-router";

import { NewsView, NewsPanel } from "../routerProvider/routerProvider";

import { Feed } from "pages/feed";
import { Article } from "pages/article/ui/Article";

const Layout: FC = () => {
  const {
    view: activeView = NewsPanel.Feed,
    panel: activePanel = NewsView.Main,
  } = useActiveVkuiLocation();

  return (
    <>
      <Root activeView={activeView}>
        <View nav={NewsView.Main} activePanel={activePanel}>
          <Feed nav={NewsPanel.Feed} />
          <Article nav={NewsPanel.Article} />
        </View>
      </Root>
    </>
  );
};

export default Layout;
