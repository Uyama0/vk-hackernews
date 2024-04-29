import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsFeed } from "../api/fetchers";
import { TNewsFeedState } from "../model/types";

const initialState: TNewsFeedState = {
  newsFeed: [],
};

export const fetchNewsData = createAsyncThunk(
  "newsFeed/fetchNewsData",
  async () => {
    const data = await getNewsFeed();
    return data.hits;
  }
);

export const newsFeedSlice = createSlice({
  name: "newsFeed",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNewsData.fulfilled, (state, action) => {
      state.newsFeed = action.payload;
    });
  },
});

export default newsFeedSlice.reducer;
