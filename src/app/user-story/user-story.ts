import { CdkDrag } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserStoryDialog } from '../user-story-dialog/user-story-dialog';
import { Avatar } from '../avatar/avatar';
import { IUserStory } from '../models/user-story.model';

@Component({
  selector: 'app-user-story',
  imports: [
    Avatar,
    CommonModule,
    CdkDrag,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './user-story.html',
  styleUrl: './user-story.scss',
})
export class UserStory {
  @Input() userStory!: IUserStory;
  @Input() index!: number;
  @Output() update = new EventEmitter<IUserStory>();

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(UserStoryDialog, {
      data: { ...this.userStory }, // Passe une copie pour éviter la mutation directe
      minWidth: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        console.log('UserStory emitting update:', result);
        this.update.emit(result); // Le parent remplacera l'objet dans le tableau
      }
    });
  }
}
