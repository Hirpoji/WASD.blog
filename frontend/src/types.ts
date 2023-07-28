import { ObjectId } from "mongodb";

export interface PostState {
  _id: ObjectId;
  tags: Array<string>;
  createdAt: string;
  title: string;
  text: string;
  imageUrl: string;
  viewsCount: number;
  user: {
    avatarUrl: string;
    fullName: string;
  };
}

export interface TagState {
  id: number;
  title: string;
  content: string;
}
