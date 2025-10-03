import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserStory } from '../user-story/user-story';
import { IUserStory } from '../models/user-story.model';

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
  @Output() updateUserStory = new EventEmitter<{ index: number; userStory: IUserStory }>();

  onUpdateUserStory(index: number, updatedUserStory: IUserStory) {
    console.log('Column relaying update:', index, updatedUserStory);
    this.updateUserStory.emit({ index, userStory: updatedUserStory });
  }
}
