import { CdkDrag } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserStoryDialog } from '../user-story-dialog/user-story-dialog';

@Component({
  selector: 'app-user-story',
  imports: [
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
  @Input() item!: string;
  @Input() index!: number;
  @Output() remove = new EventEmitter<number>();

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(UserStoryDialog, {
      data: this.item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.item = result;
      }
    });
  }
}
