export interface TCommentsData {
  by: string;
  id: number;
  parent: number;
  text: string;
  time: number;
  kids?: number[];
}
