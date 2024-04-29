import { configureStore } from "@reduxjs/toolkit";

import newsFeedSlice from "./slices/newsFeedSlice";

export const store = configureStore({
  reducer: { getFeed: newsFeedSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
