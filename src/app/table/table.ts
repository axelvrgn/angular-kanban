import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Column } from '../column/column';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { AddUserStoryDialog } from '../add-user-story-dialog/add-user-story-dialog';
import { EXAMPLE_COLUMNS } from '../constants';
import { IUserStory } from '../models/user-story.model';

@Component({
  selector: 'app-table',
  imports: [CommonModule, Column, MatIcon, MatButtonModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  columns = EXAMPLE_COLUMNS;

  constructor(private dialog: MatDialog) {}

  getColumnIds = (): string[] => {
    return this.columns.map((_, j) => 'list-' + j);
  };

  drop = (event: CdkDragDrop<IUserStory[]>) => {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      // Mettre à jour l'idColumn de la userStory déplacée
      const movedUserStory = event.container.data[event.currentIndex];
      // Trouver la colonne cible
      const targetColumnIndex = this.getColumnIds().indexOf(event.container.id);
      if (targetColumnIndex !== -1) {
        // Supposons que chaque colonne a un champ id, sinon adapte ici
        const targetColumn = this.columns[targetColumnIndex];
        movedUserStory.idColumn = targetColumn.id; // ou targetColumnIndex si tu utilises l'index comme id
      }
    }

    console.log(this.columns);
  };

  openAddUserStoryDialog() {
    const dialogRef = this.dialog.open(AddUserStoryDialog, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Ajoute le ticket dans la colonne souhaitée (ex: la première colonne)
        this.columns[0].userStories.push({
          id: Date.now(), // ou une autre méthode pour générer un id unique
          name: result.name,
          description: result.description,
        });
      }
    });
  }
}
