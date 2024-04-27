import { createHashRouter } from "@vkontakte/vk-mini-apps-router";

export const router = createHashRouter([
  {
    path: "/",
    panel: "home",
    view: "default_view",
  },
  {
    path: "/news/:id",
    panel: "news",
    view: "default_view",
  },
]);
