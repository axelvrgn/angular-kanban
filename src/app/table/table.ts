import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Column } from '../column/column';
import { CommonModule } from '@angular/common';

interface IColumn {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-table',
  imports: [CommonModule, Column],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  columns: IColumn[] = [
    { title: 'À faire', items: ['Style css'] },
    {
      title: 'En cours',
      items: ['Tableau kanban'],
    },
    {
      title: 'À tester',
      items: [],
    },
    {
      title: 'Terminé',
      items: ['Authentification', 'Inscription'],
    },
  ];

  getColumnIds(): string[] {
    return this.columns.map((_, j) => 'list-' + j);
  }

  drop(event: CdkDragDrop<string[]>) {
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
