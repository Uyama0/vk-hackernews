import {
  RoutesConfig,
  createPanel,
  createRoot,
  createView,
  createHashRouter,
} from "@vkontakte/vk-mini-apps-router";

export enum NewsPanel {
  Feed = "/",
  Article = "article",
}

export enum NewsView {
  Main = "main",
}

const NEWS_ROOT = "news";
export const INITIAL_URL = "/";

export const routes = RoutesConfig.create([
  createRoot(NEWS_ROOT, [
    createView(NewsView.Main, [
      createPanel(NewsPanel.Feed, "/", []),
      createPanel(NewsPanel.Article, `/${NewsPanel.Article}`, []),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
