import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IUserStory } from '../models/user-story.model';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-user-story-dialog',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    QuillModule,
  ],
  templateUrl: './user-story-dialog.html',
  styleUrl: './user-story-dialog.scss',
})
export class UserStoryDialog {
  readonly dialogRef = inject(MatDialogRef<UserStoryDialog>);
  readonly data = inject<IUserStory>(MAT_DIALOG_DATA);

  editDescription = false;
  description: string = '';

  ngOnInit() {
    this.description = this.data.description;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateUserStory(): void {
    this.editDescription = false;
    const updatedData = {
      ...this.data,
      description: this.description,
    };
    console.log('Dialog closing with:', updatedData);
    this.dialogRef.close(updatedData);
  }
}
