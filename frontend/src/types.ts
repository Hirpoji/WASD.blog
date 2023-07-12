import { ObjectId } from 'mongodb';

export interface PostState {
  title: string;
  text: string;
  imageUrl : string;
  viewsCount: number;
  user: ObjectId;
}

export interface TagState {
  id: number;
  title: string;
  content: string;
}
