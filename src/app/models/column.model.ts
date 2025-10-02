import { IUserStory } from './user-story.model';

export interface IColumn {
  id: number;
  title: string;
  userStories: IUserStory[];
}
