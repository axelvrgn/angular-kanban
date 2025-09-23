import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IUserStory, UserStory } from '../user-story/user-story';

@Component({
  selector: 'app-column',
  imports: [CommonModule, CdkDropList, UserStory],
  templateUrl: './column.html',
  styleUrl: './column.scss',
})
export class Column {
  @Input() title!: string;
  @Input() userStories!: IUserStory[];
  @Input() drop!: (event: CdkDragDrop<IUserStory[]>) => void;
  @Input() listId!: string;
  @Input() connectedTo!: string[];
}
