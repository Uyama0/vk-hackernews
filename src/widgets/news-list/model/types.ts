import { TNewsCard } from "@/entities/newsCard/model/types";

export interface FetchNewsArguments {
  page: number;
}

export interface FetchNewsResult {
  hits: TNewsCard[];
}
