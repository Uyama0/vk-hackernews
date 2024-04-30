import { TNewsCard } from "entities/newsCard/model/types";

export interface FetchNewsResult {
  hits: TNewsCard[];
}

export interface TNewsFeedState {
  newsFeed: TNewsCard[];
}
