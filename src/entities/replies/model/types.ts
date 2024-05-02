export interface TReplies {
  by: string;
  id: number;
  parent: number;
  text: string;
  time: number;
  kids?: number[];
  deleted?: boolean;
}

export interface TRepliesKids {
  kids: number[];
}
