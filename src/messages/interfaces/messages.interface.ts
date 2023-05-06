export interface Messages {
  id?: number;
  user: string;
  title: string;
  text: string;
  reactions: Array<{ reaction: string; author: string }>;
  comments: Array<{ comment: string; author: string }>;
  created_at: Date;
}
