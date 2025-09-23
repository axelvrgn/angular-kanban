import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Column } from '../column/column';
import { CommonModule } from '@angular/common';
import { IUserStory } from '../user-story/user-story';

interface IColumn {
  title: string;
  userStories: IUserStory[];
}

@Component({
  selector: 'app-table',
  imports: [CommonModule, Column],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  columns: IColumn[] = [
    { title: 'À faire', userStories: [{ id: 1, name: 'Style css', description: '' }] },
    {
      title: 'En cours',
      userStories: [{ id: 2, name: 'Tableau kanban', description: '' }],
    },
    {
      title: 'À tester',
      userStories: [],
    },
    {
      title: 'Terminé',
      userStories: [
        { id: 3, name: 'Authentification', description: '' },
        { id: 4, name: 'Inscription', description: '' },
      ],
    },
  ];

  getColumnIds(): string[] {
    return this.columns.map((_, j) => 'list-' + j);
  }

  drop(event: CdkDragDrop<IUserStory[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
