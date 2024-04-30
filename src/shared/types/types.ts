export interface TCommentCard {
  by: string;
  id: number;
  parent: number;
  text: string;
  time: number;
  kids?: number[];
  deleted?: boolean;
}
